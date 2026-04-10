import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    onCapture(webcamRef.current.video);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        ref={webcamRef}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={capture}
        fullWidth
      >
        Capture Face
      </Button>
    </div>
  );
};

export default Camera;