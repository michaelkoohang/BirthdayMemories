

// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import birthdayAnimation from '../lotties/birthday.json'
import confettiAnimation from '../lotties/confetti.json'
import Video from './Video'
import Image from './Image'
import data from '../data.json'
import './App.css'

class App extends Component {

  render(){

    const birthdayOptions = {
      loop: true,
      autoplay: true, 
      animationData: birthdayAnimation
    };

    const confettiOptions = {
      loop: true,
      autoplay: true, 
      animationData: confettiAnimation
    };

    return(
      <div>
        <div className="screen">
          <div className="header">
          <h1 id="happyBirthday">Happy \Number\ <br/>
                Birthday <br/>\Name\!
          </h1>
          
        </div>
        <div className="birthdayAnimation">
          <Lottie options={birthdayOptions}
          />  
        </div>
        <div className="content">
          {data.videos.map(obj => (<Video info={obj}></Video>))}
          {data.images.map(obj => (<Image info={obj}></Image>))}
        </div>
      </div>
      <div className="confettiAnimation">
        <Lottie options={confettiOptions}/>
      </div> 
      <div className="footer">
        <h2>Made with <span role="img">❤️</span> by \name\</h2>
      </div>
      </div>
    )
  }
}

export default App