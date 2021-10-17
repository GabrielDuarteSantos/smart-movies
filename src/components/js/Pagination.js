import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import '../css/Pagination.css';

class Pagination extends Component {

    render() {
        return (
            <div id="pagination" className={this.props.test}>
                <button className="action" onClick={() => this.props.onPageChange(0)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className="page-number">{this.props.currentPage}</div>
                <button className="action" onClick={() => this.props.onPageChange(1)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        );
    }

}

export default Pagination;