import React, { Component } from 'react';
import Pagination from './Pagination';
import Card from './Card';
import Axios from 'axios';

import '../css/Content.css';

class Content extends Component {

    constructor(props) {

        super(props);

        this.state = {
            'title': 'Filmes',
            'content': []
        };

    }

    async componentDidMount() {

        try {

            let response = await Axios.get('http://localhost:3000/filmes?page=1');

            this.setState({ content: response.data.results });

        } catch (err) { console.error(err); }

    }

    render() {
        return (
            <section id="content">
                <h1>{this.state.title}</h1>
                <div className="pagination-container">
                    <Pagination />
                </div>
                <div id="card-list">
                    {
                        this.state.content.map(item => 
                            <Card key={item.id} 
                                image={item.poster_path} 
                                title={item.title} 
                                overview={item.overview} />
                        )
                    }
                </div>
                <div className="pagination-container">
                    <Pagination />
                </div>
            </section>
        );
    }

}

export default Content;