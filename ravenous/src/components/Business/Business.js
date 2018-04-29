import React from 'react';
import './Business.css';
import Stars from '../Star/StarRating';
import Price from '../prices/price';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='' />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{`${this.props.business.state} ${this.props.business.zipCode}📍`}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <Stars business={this.props.business}/>
                        <p>{`${this.props.business.reviewCount} reviews`}</p>
                        <Price business={this.props.business} />
                                                
                    </div>
                </div>
            </div>
        );
    }
}

console.log("this.props.business.imageSrc");

export default Business;