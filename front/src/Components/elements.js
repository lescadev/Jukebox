import React from "react";

const Elements = () => {
    return(
        <div className="element_wrapper">
            <div id="playlist_element">
                <div id="header_playlist">
                    <iframe width="250" height="135" title="video" id="yt_player"src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">    
                    </iframe>
                    <div id="description_clip">
                        <h3 id="music_title">Titre de la musique</h3>
                        <p>Utilisateur 3767</p>
                        <div className="vote">
                            <img id="vote_pour"src="https://img.icons8.com/wired/64/000000/eggplant.png" alt="aubergine vote pour"/>
                            <img id="vote_contre"src="https://img.icons8.com/wired/64/000000/eggplant.png" alt="aubergine vote contre"/>
                        </div>
                    </div>
                </div>
                <div id="body_playlist">
                    <div className="musique">
                        <h4>Musique en attente de lecture</h4>
                    </div>
                    <div className="infos_musique">
                        <p>ajouté par Utilisateur 4835</p>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" alt="bouton supprimer"></img>
                    </div>
                </div>
            </div>
            <div id="chatbox_element">
                <div id='zone_de_chat'>
                    <p id="chatlog9" className="chatlog">&nbsp;</p>
                    <p id="chatlog8" className="chatlog">&nbsp;</p>
                    <p id="chatlog7" className="chatlog">&nbsp;</p>
                    <p id="chatlog6" className="chatlog">&nbsp;</p>
                    <p id="chatlog5" className="chatlog">&nbsp;</p>
                    <p id="chatlog4" className="chatlog">&nbsp;</p>
                    <p id="chatlog3" className="chatlog">&nbsp;</p>
                    <p id="chatlog2" className="chatlog">&nbsp;</p>
                    <p id="chatlog1" className="chatlog">&nbsp;</p>
                    <input type="text" name="chat" id="barre_de_chat" placeholder="&nbsp;&nbsp;Hello, écrivez un p'tit message!" />
                </div>
            </div>
            <div id="search_element">
                <input type="search" name="search" id="recherche_youtube" placeholder="Rechercher une musique..." />
            </div>
        </div>
    )
}

export default Elements;
