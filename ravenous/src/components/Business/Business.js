import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import './Business.css';
import * as NotFound from './inf.png';
import Stars from '../Star/StarRating';
import Price from '../prices/price';

class Business extends Component {

    render() {
        const { business } = this.props;
        return (

            <div className='Business'>
                <FadeIn>
                    <div className="image-container">
                        {business.imageSrc.length > 0
                            ? <img src={business.imageSrc} alt='business' />
                            : <img src={NotFound} alt='notFound' />}
                    </div>
                    <h2>{business.name}</h2>
                    <div className="Business-information">
                        <div className="Business-address">
                            <a onClick={this.renderMaps}>{business.address}</a>
                            <p>{business.city}</p>
                            <p>{`${business.state} ${business.zipCode}📍`}</p>
                        </div>
                        <div className="Business-reviews">
                            <h3>{business.category}</h3>
                            <Stars business={business} />
                            <p>{`${business.reviewCount} reviews`}</p>
                            <Price business={business} />
                        </div>
                    </div>
                </FadeIn>
            </div>
        );
    }
}

export default Business;
