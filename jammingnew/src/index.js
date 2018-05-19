import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomeScreen from './Components/HomeScreen/HomeScreen';
// import SearchAndPlay from './Components/SearchAndPlaylist/SearchAndPlay';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/HomeScreen' component={HomeScreen} />
            {/* <Route path='/SearchAndPlay' component={SearchAndPlay} /> */}
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
