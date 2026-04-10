import React, { useState } from "react";
import Camera from "./Camera";
import { getDescriptor } from "../utils";
import { TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");

 const handleCapture = async (video) => {
  const descriptor = await getDescriptor(video);

  if (!descriptor) {
    toast.error("Face not detected. Try again.");
    return;
  }

  if (!name) {
    toast.warning("Please enter name");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ name, descriptor: Array.from(descriptor) });

  localStorage.setItem("users", JSON.stringify(users));

  // ✅ SHOW SUCCESS AFTER SAVE
  toast.success("User Registered Successfully!");
};

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Register User
      </Typography>

      <TextField
        label="Enter Name"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setName(e.target.value)}
      />

      <Camera onCapture={handleCapture} />
    </div>
  );
};

export default Register;