import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AddIcon from "./components/AddIcon";

const App = () => {

  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <AddIcon />
      <Footer/>
    </Box>
    </ThemeProvider>
  );
};

export default App;
