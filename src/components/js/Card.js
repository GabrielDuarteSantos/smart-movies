import React, { Component } from 'react';

import '../css/Card.css';

class Card extends Component {

    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.image} alt=""></img>
                    </div>
                    <div className="card-info">
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="overview">
                            {this.props.overview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;