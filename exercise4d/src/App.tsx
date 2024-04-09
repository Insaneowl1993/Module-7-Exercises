import { useState } from 'react'
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Card>xs=8</Card>
      </Grid>
      <Grid item xs={4}>
        <Card>xs=4</Card>
      </Grid>
      <Grid item xs={4}>
        <Card>xs=4</Card>
      </Grid>
      <Grid item xs={8}>
        <Card>xs=8</Card>
      </Grid>
    </Grid>
  );
}
}

export default App;