import React from 'react';

class Stars extends React.Component {
    renderStars() {
        if (this.props.business.rating === 1) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 1.5) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 2) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 2.5) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 3) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 3.5) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-o checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 4) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 4.5) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-o checked"></span>
                </div>
            );
        } if (this.props.business.rating === 5) {
            return (
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
            );
        } else {
            return 'Rating Uknown';
        }
    }

    render() {
        return (
            <div className="rating">
                {this.renderStars()}
            </div>
        )
    };
}

export default Stars;
