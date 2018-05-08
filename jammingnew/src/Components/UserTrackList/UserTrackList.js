import React from 'react';
import UserTrack from '../UserTrack/UserTrack';

class UserTrackList extends React.Component {
    render() {
        return (
            <div>
                { 
                    this.props.userPlaylist.map(item => {
                        return <UserTrack item={item} key={item.id} />
                    })
                }
            </div>
        );
    }
}

export default UserTrackList;