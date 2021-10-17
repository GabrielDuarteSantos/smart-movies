import { Component } from 'react';
import Axios from 'axios';

import Header from './components/js/Header';
import WelcomeSection from './components/js/WelcomeSection';
import ContentListing from './components/js/ContentListing';
import Info from './components/js/Info';
import CastCard from './components/js/CastCard';

import './App.css';

class App extends Component {

    constructor() {

        super();

        this.state = {
            'contentType': 1,
            'content': [],
            'currentPage': 1,
            'totalPages': 1,
            'selectedCard': undefined
        };

    }

    async componentDidMount() {

        let content = await this.getContent(this.state.contentType, this.state.currentPage);

        this.setState({ 'content': content.results, 'totalPages': content.total_pages });

    }

    handleContentChange = async (contentType) => {

        let currentPage = 1,
            selectedCard = undefined;

        let content = await this.getContent(contentType, currentPage);

        this.setState({
            contentType, 
            currentPage,
            selectedCard,
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

    getContentUrl(contentType) {

        let urlContent = '';

        if (contentType === 1)
            urlContent = 'filmes';
        else if (contentType === 2)
            urlContent = 'series';

        return 'http://localhost:3000/' + urlContent;

    }

    getContent = async (contentType, page) => {

        let url = this.getContentUrl(contentType) + '?page=' + page;

        try {

            let response = await Axios.get(url);

            return response.data;

        } catch (err) { console.error(err); }

    }

    getContentById = async (id, contentType) => {

        let url = this.getContentUrl(contentType) + '/' + id;

        try {

            let response = await Axios.get(url);

            return response.data;

        } catch (err) { console.error(err); }

    }

    handleCardSelection = async (id) => {

        let selectedCard = await this.getContentById(id, this.state.contentType);

        this.setState({ selectedCard });

    }

    getComponents() {

        if (typeof this.state.selectedCard === 'undefined') {

            return (
                <>
                    <WelcomeSection />
                    <ContentListing 
                        contentType={this.state.contentType} 
                        content={this.state.content}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                        onCardSelection={this.handleCardSelection} />
                </>
            );

        } else {

            return (
                <>
                    <Info data={this.state.selectedCard} />
                    <section id="cast">
                        <h2>Elenco</h2>
                        <div className="cast-list">
                            {
                                this.state.selectedCard.credits.cast.map(member => 
                                    <CastCard key={member.id} data={member} />
                                )
                            }
                        </div>
                    </section>
                </>
            );

        }

    }

    render() {
        return (
            <>
                <Header onContentChange={this.handleContentChange} />
                {this.getComponents()}
            </>
        );
    }
}

export default App;
