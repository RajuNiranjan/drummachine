import React from "react";

const App = () => {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drum-pad" id="Q">
        <audio
          className="clip"
          id="Q-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        Q
      </div>
      <div className="drum-pad" id="W">
        <audio
          className="clip"
          id="W-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        W
      </div>
      <div className="drum-pad" id="E">
        <audio
          className="clip"
          id="E-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        E
      </div>
      <div className="drum-pad" id="A">
        <audio
          className="clip"
          id="A-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        A
      </div>
      <div className="drum-pad" id="S">
        <audio
          className="clip"
          id="S-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        S
      </div>
      <div className="drum-pad" id="D">
        <audio
          className="clip"
          id="D-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        D
      </div>
      <div className="drum-pad" id="Z">
        <audio
          className="clip"
          id="Z-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        Z
      </div>
      <div className="drum-pad" id="X">
        <audio
          className="clip"
          id="X-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        X
      </div>
      <div className="drum-pad" id="C">
        <audio
          className="clip"
          id="C-sound"
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        C
      </div>
    </div>
  );
};

export default App;
