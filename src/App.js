import React, { Component } from 'react';
import Axios from 'axios';

import Header from './components/js/Header';
import WelcomeSection from './components/js/WelcomeSection';
import Content from './components/js/Content';

import './App.css';

class App extends Component {

    constructor() {

        super();

        this.state = {
            'contentType': 1,
            'content': [],
            'currentPage': 1
        };

    }

    async componentDidMount() {

        let content = await this.getContent(this.state.contentType);

        this.setState({ content });

    }

    handleContentChange = async (contentType) => {

        let content = await this.getContent(contentType);

        this.setState({ contentType, content });

    }

    getContent = async (contentType) => {

        let urlContent = '';

        if (contentType === 1)
            urlContent = 'filmes';
        else if (contentType === 2)
            urlContent = 'series';

        let url = `http://localhost:3000/${urlContent}?page=1`;

        try {

            let response = await Axios.get(url);

            return response.data.results;

        } catch (err) { console.error(err); }

    }

    render() {
        return (
            <>
                <Header onContentChange={this.handleContentChange} />
                <WelcomeSection />
                <Content contentType={this.state.contentType} content={this.state.content} />
            </>
        );
    }
}

export default App;
