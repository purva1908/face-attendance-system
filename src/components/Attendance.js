import React, { useState } from "react";
import Camera from "./Camera";
import { getDescriptor } from "../utils";
import * as faceapi from "face-api.js";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { toast } from "react-toastify";

const Attendance = () => {
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("attendance")) || []
  );
  const playSound = () => {
  const audio = new Audio("/success.mp3");
  audio.play();
};
  const playSoundError = () => {
  const audio = new Audio("/error.mp3");
  audio.play();
};

  const handleCapture = async (video) => {
    const descriptor = await getDescriptor(video);

   if (!descriptor) {
  toast.error("Face not detected");
  return;
}

    const users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = null;

    users.forEach((user) => {
      const distance = faceapi.euclideanDistance(
        descriptor,
        new Float32Array(user.descriptor)
      );

      if (distance < 0.5) {
        foundUser = user.name;
      }
    });

    if (foundUser) {
      const newRecord = {
        name: foundUser,
        time: new Date().toLocaleString(),
      };

      const updated = [...records, newRecord];
      setRecords(updated);
      localStorage.setItem("attendance", JSON.stringify(updated));

      playSound();
      toast.success(`Attendance marked for ${foundUser}`);
    } else {
     playSoundError();
     toast.error("Face not recognized");
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Mark Attendance
      </Typography>

      <Camera onCapture={handleCapture} />

      <Typography variant="subtitle1" mt={2}>
        Attendance Records
      </Typography>

      <List>
        {records.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.name}
              secondary={item.time}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Attendance;