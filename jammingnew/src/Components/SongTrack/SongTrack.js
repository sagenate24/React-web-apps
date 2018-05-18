import React from 'react';
import './SongTrack.css';

class SongTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songLength: 0
        }
        this.displaySongLength = this.displaySongLength.bind(this);
    }



    displaySongLength() {
        let y = this.props.track.duration / 60000;
        let factor = Math.pow(10, 2);
        let newSongLength = Math.round(y * factor) / factor;
        let hrs = parseInt(Number(newSongLength));
        let min = Math.round((Number(newSongLength) - hrs) * 60);
        let songLengthInMin = hrs + ':' + min;
        if (songLengthInMin.length < 4) {
            songLengthInMin += 0;
            this.setState({ songLength: songLengthInMin });
        }
        this.setState({ songLength: songLengthInMin });
    }

    render() {
        return (
            <div className="songTrack" onLoad={this.displaySongLength}>
                <img style={{ height: '32px' }} src={this.props.track.albumImage} alt={"Album"} />
                <div className="songTrack-information">
                    <h4>{this.props.track.songName}<span>{this.props.track.artistsName} | {this.state.songLength} 🎧</span></h4>
                </div>
            </div>
        );
    }
}

export default SongTrack;