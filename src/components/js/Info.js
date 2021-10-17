import { Component } from 'react';

import '../css/Info.css';

class Info extends Component {

    render() {

        let { data } = this.props;
        let title = data.title || data.name;

        return (
            <div id="info-section">
                <div id="image-container">
                    <div className="image">
                        <img src={data.poster_path} alt={title}></img>
                    </div>
                </div>
                <section id="details-container">
                    <h1>{title}</h1>
                    <div className="overview-section">
                        <h3>Sinopse</h3>
                        <p>{data.overview}</p>
                    </div>
                </section>
                <img id="background-image" src={data.backdrop_path} alt=""></img>
            </div>
        );
    }

}

export default Info;