import React from 'react';
import './UserTrack.css';

class UserTrack extends React.Component {
    render() {
        return (
            <div className="UserTrack">
                <img src={this.props.item.image} alt={"UserAlbumImg"} />
                <div className="UserTrack-information">
                    <h3>{this.props.item.name}</h3>
                </div>
            </div>
        );
    }
}

export default UserTrack;