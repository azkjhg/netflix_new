// js
import React from 'react';
import YouTube from 'react-youtube';

export default class Preview extends React.Component {
  render() {
    const {PreviewData, setIsOpen, isOpen} = this?.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    let movieKey = PreviewData?.results[0].key
    return <div className='preview_container'>
                <div className='preview_modalContainer'>
                    <button className='preview_modalButton' onClick={() => setIsOpen(!isOpen)}> X </button>
                    <YouTube videoId={movieKey} opts={opts} onReady={this._onReady} />
                </div>
            </div>;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

