import { Component } from 'react';

import '../css/ContentCard.css';

class ContentCard extends Component {

    render() {

        let { data } = this.props;
        let title = data.title || data.name;

        return (
            <div className="card-container" onClick={() => this.props.onCardSelection(data.id)}>
                <div className="card">
                    <div className="card-image">
                        <img src={data.poster_path} alt={title}></img>
                    </div>
                    <div className="card-info">
                        <div className="title">
                            {title}
                        </div>
                        <div className="overview">
                            {data.overview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContentCard;