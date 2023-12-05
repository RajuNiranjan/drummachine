import React from "react";

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drum-pad" id="Q">
        <audio className="clip" src="audio/Heater-1.mp3" id="Q"></audio>Q
      </div>
      <div className="drum-pad" id="W">
        <audio className="clip" src="audio/Heater-2.mp3" id="W"></audio>W
      </div>
      <div className="drum-pad" id="E">
        <audio className="clip" src="audio/Heater-3.mp3" id="E"></audio>E
      </div>
      <div className="drum-pad" id="A">
        <audio className="clip" src="audio/Heater-4.mp3" id="A"></audio>A
      </div>
      <div className="drum-pad" id="S">
        <audio className="clip" src="audio/Clap.mp3" id="S"></audio>S
      </div>
      <div className="drum-pad" id="D">
        <audio className="clip" src="audio/Open-HH.mp3" id="D"></audio>D
      </div>
      <div className="drum-pad" id="Z">
        <audio className="clip" src="audio/Kick-n'-Hat.mp3" id="Z"></audio>Z
      </div>
      <div className="drum-pad" id="X">
        <audio className="clip" src="audio/Kick.mp3" id="X"></audio>X
      </div>
      <div className="drum-pad" id="C">
        <audio className="clip" src="audio/Closed-HH.mp3" id="C"></audio>C
      </div>
    </div>
  );
};

export default DrumMachine;
