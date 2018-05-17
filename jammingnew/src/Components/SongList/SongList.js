import React from 'react';
import SongTrack from '../SongTrack/SongTrack';
import './SongList.css';

class SongList extends React.Component {
    render() {
        return (
            <div className="SongList">
                {
                    this.props.songs.map(track => {
                        return <SongTrack track={track} key={track.id}/>
                    })
                }
            </div>
        );
    }
}

export default SongList;