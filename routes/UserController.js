const router = require("express").Router();
let { User } = require("../models/userModel");
const passwordHash = require("password-hash");

router.route("/signup").post((req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.password || !req.body.username) {
    res.status(400).json({
      text: "Requête invalide"
    });
  } else {
    let user = {
      email: req.body.email,
      password: passwordHash.generate(req.body.password),
      username: req.body.username
    };
    let findUser = new Promise((resolve, reject) => {
      User.findOne(
        {
          email: user.email
        },
        (err, res) => {
          if (err) {
            reject(500);
          } else {
            if (res) {
              reject(401);
            } else {
              resolve(true);
            }
          }
        }
      );
    });
    findUser.then(
      function() {
        let _u = new User(user);
        _u.save(function(err, user) {
          if (err) {
            res.status(500).json({
              text: "Erreur interne"
            });
          } else {
            res.status(200).json({
              text: "Succès",
              token: user.getToken()
            });
          }
        });
      },
      function(error) {
        switch (error) {
          case 500:
            res.status(500).json({
              text: "Erreur interne"
            });
            break;
          case 401:
            res.status(401).json({
              text: "L'adresse email existe déjà"
            });
            break;
          default:
            res.status(500).json({
              text: "Erreur interne"
            });
        }
      }
    );
  }
});

router.route("/login").post((req, res) => {
  if (!req.body.username || !req.body.password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    res.status(400).json({
      text: "Requête invalide"
    });
  } else {
    User.findOne(
      {
        username: req.body.username
      },
      function(err, user) {
        if (err) {
          res.status(500).json({
            text: "Erreur interne"
          });
        } else if (!user) {
          res.status(401).json({
            text: "L'utilisateur n'existe pas"
          });
        } else {
          if (user.authenticate(req.body.password)) {
            res.status(200).json({
              token: user.getToken(),
              text: "Authentification réussi"
            });
          } else {
            res.status(401).json({
              text: "Mot de passe incorrect"
            });
          }
        }
      }
    );
  }
});

module.exports = router;
