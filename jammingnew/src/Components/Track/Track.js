import React from 'react';
import './Track.css';
import playButtonPng from './playButton.png';
import pauseButtonPng from './pauseButton.png';
// import LoadingIcon from '../Loading/Loading';
import songNotFound from './SongNotFound.png';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.playTrialAudio = this.playTrialAudio.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

        this.url = `${this.props.track.previewAudio}`;
        this.audio = new Audio(this.url);

        this.state = {
            albumImg: `${this.props.track.albumImage}`,
            play: false,
        }
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
        }
        return <a className="Track-action" onClick={this.addTrack}>+</a>
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    playTrialAudio() {
        if (this.props.track.previewAudio !== null) {
            if (this.state.play === false) {
                this.audio.play();
                this.setState({
                    play: true,
                    albumImg: pauseButtonPng,
                });
            } else {
                this.audio.pause();
                this.setState({
                    play: false,
                    albumImg: playButtonPng
                });
            }
        } else {
            this.setState({ albumImg: songNotFound });
            window.alert('Preview not available');
        }
    }

    mouseEnter() {
        if (this.props.track.previewAudio !== null) {
            if (this.state.play === true) {
                this.setState({ albumImg: pauseButtonPng });
            }
            else { this.setState({ albumImg: playButtonPng }); }
        }
        else { this.setState({ albumImg: songNotFound }); }
    }

    mouseLeave() {
        this.setState({ albumImg: `${this.props.track.albumImage}` });
    }

    render() {
        // console.log(this.state.track.id)
        // console.log(this.props.track.previewAudio);
        return (
            <div className="Track">
                <img src={this.state.albumImg} alt={"Album"} onClick={this.playTrialAudio} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.albumName}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}


export default Track;