import React from 'react';
import { BarLoader } from 'react-spinners';

class LoadingIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <BarLoader
                    color={'#36D7B7'}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default LoadingIcon;