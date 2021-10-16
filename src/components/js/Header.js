import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

import '../css/Header.css';

class Header extends Component {

    render() {
        return (
            <nav>
                <div className="section header-title">
                    <div>Smart Movies</div>
                </div>
                <div className="section header-buttons">
                    <button>Filmes</button>
                    <button>Séries</button>
                </div>
                <div className="section header-medias">
                    <div><FontAwesomeIcon icon={faTwitter} /></div>
                    <div><FontAwesomeIcon icon={faFacebook} /></div>
                    <div><FontAwesomeIcon icon={faYoutube} /></div>
                </div>
            </nav>
        );
    }

}

export default Header;