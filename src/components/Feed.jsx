import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from './Card'


const Feed = () => {
 
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      
      <Card />
      <Card />
      <Card />
      <Card />
      {/* {cities && cities} */}
      {/* {countries && countries} */}
    </Box>
  );
};

export default Feed;
