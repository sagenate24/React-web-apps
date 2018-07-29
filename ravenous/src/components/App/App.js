import React from 'react';
import { ClipLoader } from 'react-spinners';
import './App.css';
import FadeIn from 'react-fade-in';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      results: false,
      loading: false
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({ loading: true });
    setTimeout(() => {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({ businesses: businesses, results: true });
      }).then(() => {
        this.setState({ loading: false });
      });
    }, 1000);
  }

  render() {
    console.log(this.state.loading)
    return (
      <FadeIn>
        <div className="App">
          <div className="header">
            <h1>devour</h1>
          </div>
          <SearchBar searchYelp={this.searchYelp} />
          {this.state.loading
            ? <div className='loader'>
              <ClipLoader
                color={'#5de4ee'}
                loading={this.state.loading}
                size='50'
              />
            </div>
            : this.state.results
              ? this.state.businesses.length > 0
                ? <BusinessList businesses={this.state.businesses} />
                : <div className='sorry_no_results'><h2>Sorry /: no results. Try again!</h2></div>
              : <div className='results_false'>
                <div>
                  <h1>Hungry?... Search For Restaurants In Your Area!</h1>
                  <p>Search using the type or name of the business and location</p>
                </div>
              </div>
          }
        </div>
      </FadeIn>
    );
  }
}

export default App;
