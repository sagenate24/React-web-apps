import React from 'react';

class Price extends React.Component {
    renderPrice() {
        if (this.props.business.price === '$') {
            return ('💵');
        } if (this.props.business.price === '$$') {
            return ('💵 💵');
        } if (this.props.business.price === '$$$') {
            return ('💵 💵 💵');
        } else {
            return 'price unknown';
        }
    }

    render() {
        return (
            <div>
                {this.renderPrice()}
            </div>
        )
    };
}

export default Price;
