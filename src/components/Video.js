

// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import videoAnimation from '../lotties/play.json'
import './Video.css'

class Video extends Component {

  playPause(id) {
    var vid = document.getElementById(id);
    vid.paused ? vid.play() : vid.pause();
  }

  render(){

    const videoOptions = {
        loop: true,
        autoplay: true, 
        animationData: videoAnimation
    };

    return(
      <div className="videoCard noselect" onClick={this.playPause.bind(this, this.props.info.id)}>
          <video src={require('../videos/' + this.props.info.src) + "#t=0.1"} id={this.props.info.id}></video>
          <div className="videoCardFooter">
            <h2 className="videoName">{this.props.info.name}</h2>
            <div className="play">
              <Lottie className="noselect" options={videoOptions}
              />
            </div>
          </div>
      </div>      
    )
  }
}

export default Video