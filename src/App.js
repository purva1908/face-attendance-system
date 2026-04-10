import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import Attendance from "./components/Attendance";
import { loadModels } from "./utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

function App() {
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      await loadModels();
      setModelsLoaded(true);
    };
    load();
  }, []);

  if (!modelsLoaded) {
    return (
      <Container style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Loading AI Models...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: "30px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Face Recognition Attendance System
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={5} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Register />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={5} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Attendance />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ToastContainer position="top-right" autoClose={2000} />
    </Container>
  );
}

export default App;