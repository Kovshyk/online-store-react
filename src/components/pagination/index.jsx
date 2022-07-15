import React from "react";
export default class Pagination extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            totalPages: 12,
            selectPage: 0,
            index: 0,
        }
    }

    allPages() {
        return new Array(this.state.totalPages).fill(1).map((_, index) => {

            this.state.index = index;
            return (<li key={index} className={this.activePage()}
                        data-element="pagination" onClick={() => {
                this.setState({selectPage: index})
            }} data-page-index={index}>{index + 1}</li>)
        })
    }

    activePage() {
        let classOfElement = 'pagination-element'
        if (this.state.selectPage === this.state.index) {
            return classOfElement += ' active';
        } else {
            return classOfElement;
        }

    }

    render() {

        return (
            <ul className="pagination" data-element="pagination">
                <li className="pagination-element-arrow bi bi-chevron-left" onClick={() => this.clickLeft()}
                    data-element="prev"></li>
                {this.allPages()}
                <li className="pagination-element-arrow bi bi-chevron-right" onClick={() => this.clickRight()}
                    data-element="next"></li>
            </ul>
        )
    }

    clickRight() {
        if (this.state.selectPage + 1 === this.state.totalPages) return;
        this.setState({selectPage: this.state.selectPage + 1})


    }

    clickLeft() {
        if (this.state.selectPage + 1 === 1) return;
        this.setState({selectPage: this.state.selectPage - 1})
    }
}