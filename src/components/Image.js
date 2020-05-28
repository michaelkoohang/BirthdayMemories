

// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import cameraAnimation from '../lotties/camera.json'
import './Image.css'

class Image extends Component {

  render(){

    const cameraOptions = {
        loop: true,
        autoplay: true, 
        animationData: cameraAnimation
    };

    return(
      <div className="imageCard noselect" id={this.props.info.id}>
          <img src={require('../images/' + this.props.info.src)}></img>
          <div className="imageCardFooter">
            <h2 className="imageName">{this.props.info.text}</h2>
            <div className="image">
              <Lottie className="noselect" options={cameraOptions}
              />
            </div>
          </div>
      </div>      
    )
  }
}

export default Image