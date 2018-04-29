import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: 'new playlist'
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack =>
    savedTrack.id === track.id)) {
      return;
    }
    let newPlaylistTracks = this.state.playlistTracks;
    newPlaylistTracks.push(track);
    this.setState({playlistTracks: newPlaylistTracks})
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks.filter(item =>
    item.id !== track.id);
    this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURI = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURI).then(() => {
      this.setState({
        playlistTracks: [],
        playlistName: 'new playlist'
      });
    });
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(results => {
      this.setState({searchResults: results});
    });
  }

  // userImage() {
  //   return Spotify.getUserImage();
  // }

  render() {
    return (
      <div>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}
                      onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
                      
          </div>
        </div>
      </div>
    );
  }
}



export default App;
