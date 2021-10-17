import { Component } from 'react';

import '../css/CastCard.css';

class Info extends Component {

    render() {

        let { data } = this.props;

        return (
            <div className="cast-card">
                <img src={data.profile_path} alt=""></img>
                <h3>{data.name}</h3>
                <h4>{data.character}</h4>
            </div>
        );
    }

}

export default Info;