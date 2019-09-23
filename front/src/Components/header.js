import React from 'react';

const Header = () => {
    return(
    <header>
        <ul className="menu-header">
            <li><h1 id="title">L'Escabox</h1></li>
            <li><a id="login" href="#popup1">Connexion</a></li>
        </ul>
        <div id="popup1" className="overlay">
	        <div className="popup">
		        <a className="close" href="none">&times;</a>
		        <div className="content">
                    <form>
                        <label htmlFor="name">Nom d'utilisateur:</label> <br />
                        <input type="text" id="name" name="name" /> <br /><br />
                        <label htmlFor="password">Mot de passe:</label> <br />
                        <input type="password" id="password" name="password" /> <br /><br />
                        <button type="submit">Connexion</button>
                    </form>
		        </div>
	        </div>
        </div>
    </header>
    )
}

export default Header;