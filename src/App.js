import React, { Component } from 'react';
import capture from './services/capture.js';
// import * as posenet from '@tensorflow-models/posenet';
// const context = new AudioContext();
//const Tone = require("tone");
// var synth = new Tone.AMSynth().toMaster();

class App extends Component {
  constructor(props) {
    super(props);
    this.video = {};
    this.state = {
      noteC: 'inactive',
      noteD: 'inactive',
      noteE: 'inactive',
      noteF: 'inactive',
      noteA: 'inactive',
      noteB: 'inactive'
    };
  }

  componentDidMount = async () => {
    console.log('did mount');
    capture();
  };

  render() {
    return (
      <div className="container">
        <h1>Jam Cam</h1>

        <div id="keyboard_container">
          <div className="keyboard_C">C</div>
          <div className="keyboard_D">D</div>
          <div className="keyboard_E">E</div>
          <div className="keyboard_F">F</div>
          <div className="keyboard_G">G</div>
          <div className="keyboard_A">A</div>
          <div className="keyboard_B">B</div>

          <video id="video" width="640" height="480" controls autoPlay />
          <canvas id="overlay" />
        </div>
        {/* <div id="overlay_container">
          <canvas id="overlay" height="300" width="300" />

        <video className="video" playsInline ref={this.setRef} />
        </div> */}
      </div>
    );
  }
}
export default App;
