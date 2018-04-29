import React from 'react';

class YelpImage extends React.Component {

    renderImage() {
        if (this.props.business.imageSrc) {
            return (<img src={this.props.business.imageSrc} alt='' />);
        } else {
            return '../../Images/notavailableimage.jpeg';
        }
    }

    render() {
        return (
            <div>
                {this.renderImage()}
            </div>
        );
    }
}

export default YelpImage;