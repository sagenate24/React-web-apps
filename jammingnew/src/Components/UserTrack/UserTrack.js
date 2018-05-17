import React from 'react';
import './UserTrack.css';
import Spotify from '../../util/Spotify';
import SongList from '../SongList/SongList';

class UserTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistSongs: [],
            buttonName: 'Display Songs',
            dropDown: false
        }
        this.displayTracks = this.displayTracks.bind(this);
        this.saveTracks = this.saveTracks.bind(this);
    }

    displayTracks() {
        let accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };

        return fetch(this.props.tracks, { headers: headers }
        ).then(response => response.json()
        ).then(jsonResponse => {
            return jsonResponse.items.map(smallTracks => ({
                id: smallTracks.track.id,
                albumImage: smallTracks.track.album.images[2].url,
                songName: smallTracks.track.name,
                previewAudio: smallTracks.track.preview_url,
                artistsName: smallTracks.track.artists[0].name,
                duration: smallTracks.track.duration_ms
            }))
        })
    }

    saveTracks() {
        if (!this.state.dropDown) {
            this.displayTracks().then(results => {
                this.setState({
                    playlistSongs: results,
                    buttonName: 'Minimize',
                    dropDown: true
                });
            });
        } else {
            this.setState({
                buttonName: 'Display Songs',
                dropDown: false
            })
        }
    }

    render() {
        console.log(this.state.playlistSongs);
        return (
            <div className="trackContainer">
                <div className="UserTrack">
                    <img src={this.props.item.image} alt={"UserAlbumImg"} />
                    <div className="UserTrack-information">
                        <h3>{this.props.item.name}</h3>
                    </div>
                    <button className={"dropDownButton"} onClick={this.saveTracks}>{this.state.buttonName}</button>
                </div>
                <SongList songs={this.state.playlistSongs} />
            </div>
        );
    }
}

export default UserTrack;