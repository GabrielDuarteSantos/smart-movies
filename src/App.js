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
            'currentPage': 1,
            'totalPages': 1
        };

    }

    async componentDidMount() {

        let content = await this.getContent(this.state.contentType, this.state.currentPage);

        this.setState({ 'content': content.results, 'totalPages': content.total_pages });

    }

    handleContentChange = async (contentType) => {

        if (contentType === this.state.contentType) return;

        let currentPage = 1;
        let content = await this.getContent(contentType, currentPage);

        this.setState({
            contentType, 
            currentPage,
            'content': content.results, 
            'totalPages': content.total_pages
        });

    }

    handlePageChange = async (next) => {

        let currentPage = next ? ++this.state.currentPage : --this.state.currentPage;

        if (currentPage > this.state.totalPages)
            currentPage = 1;
        else if (currentPage < 1)
            currentPage = this.state.totalPages;

        let content = await this.getContent(this.state.contentType, currentPage);

        this.setState({ 'content': content.results, currentPage });

    }

    getContent = async (contentType, page) => {

        let urlContent = '';

        if (contentType === 1)
            urlContent = 'filmes';
        else if (contentType === 2)
            urlContent = 'series';

        let url = `http://localhost:3000/${urlContent}?page=` + page;

        try {

            let response = await Axios.get(url);

            return response.data;

        } catch (err) { console.error(err); }

    }

    render() {
        return (
            <>
                <Header onContentChange={this.handleContentChange} />
                <WelcomeSection />
                <Content 
                    contentType={this.state.contentType} 
                    content={this.state.content}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange} />
            </>
        );
    }
}

export default App;
