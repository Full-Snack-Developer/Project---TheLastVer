import React from "react";
import { useState } from "react";
import "../Intro/Intro.css";
import ReactPlayer from "react-player";
import { VscUnmute, VscMute } from "react-icons/vsc";

function Intro(props) {
  const [ismute, setIsmute] = useState(true);

  return (
    <div>
      <div className="containerIntro">
        <ReactPlayer
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          volume={1}
          muted={ismute}
          url="https://vimeo.com/273686020"
          className="videoIntro"
        />
        <div className="infoIntro">
          <h1 className="titleIntro">PhimFly The Rain</h1>
          <p className="textIntro">
            Trailer for PhimFly series "The Rain". Production: Fox Devil Films
            GmbH for Netflix Amsterdam Director: Simon Ritzler Dop: Carlo
            Jelavic Editor: Michael Timmers Colorist: Mike Bothe Compositing:
            Stathis Nafpliotis
          </p>
        </div>
        {ismute ? (
          <VscUnmute
            className="volumeIntro"
            onClick={() => setIsmute((prev) => !prev)}
          />
        ) : (
          <VscMute
            className="volumeIntro"
            onClick={() => setIsmute((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
}

export default Intro;
