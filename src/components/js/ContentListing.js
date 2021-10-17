import { Component } from 'react';

import Pagination from './Pagination';
import Card from './ContentCard';

import '../css/ContentListing.css';

class ContentListing extends Component {

    getContentTitle = () => {

        let title = '';

        if (this.props.contentType === 1)
            title = 'Filmes';
        else if (this.props.contentType === 2)
            title = 'Séries';

        return title;

    }

    render() {
        return (
            <section id="content">
                <h1>{this.getContentTitle()}</h1>
                <div className="pagination-container">
                    <Pagination 
                        onPageChange={this.props.onPageChange}
                        currentPage={this.props.currentPage} />
                </div>
                <div id="card-list">
                    {
                        this.props.content.map(item => 
                            <Card key={item.id} 
                                data={item}
                                onCardSelection={this.props.onCardSelection} />
                        )
                    }
                </div>
                <div className="pagination-container">
                    <Pagination 
                        onPageChange={this.props.onPageChange}
                        currentPage={this.props.currentPage} />
                </div>
            </section>
        );
    }

}

export default ContentListing;