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
        let x = this.props.track.duration;
        let y = x / 60000;
        let factor = Math.pow(10, 2);
        let newSongLength = Math.round(y * factor) / factor;
        // let H = new Array();
        // H = newSongLength.split('.');
        this.setState({ songLength: newSongLength });
        
    }

    render() {
        return (
            <div className="songTrack" onLoad={this.displaySongLength}>
                <img style={{height: '42px'}} src={this.props.track.albumImage} alt={"Album"} onClick={this.playTrialAudio} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}/>
                <div className="songTrack-information">
                    <h4>{this.props.track.songName}</h4>
                    <p>{this.props.track.artistsName} | {this.state.songLength} 🎧</p>
                </div>
            </div>
        );
    }
}

export default SongTrack;