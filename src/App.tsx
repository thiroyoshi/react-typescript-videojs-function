import React from 'react';
import './App.css';
import videojs from 'video.js';

import Player from './components/Player'

const videoJsOptions: videojs.PlayerOptions = {
  controls: true,
  muted: true,
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player {...videoJsOptions}/>
      </header>
    </div>
  );
}

export default App;
