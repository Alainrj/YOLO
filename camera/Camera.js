import React from "react";
import Webcam from "react-webcam";
 
class Component extends React.Component {
  render() {
    return <Webcam />;
  }
}

class WebcamCapture extends React.Component {
    render() {
      const videoConstraints = {
        facingMode: "user"
      };
   
      return <Webcam videoConstraints={videoConstraints} />;
    }
  }