

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
      <div className="imageCard" id={this.props.info.id}>
          <img src={require('../images/' + this.props.info.src)}></img>
          <div className="imageCardFooter">
            <h2 className="imageName">{this.props.info.name}</h2>
            <div className="image">
              <Lottie options={cameraOptions}
              />
            </div>
          </div>
      </div>      
    )
  }
}

export default Image