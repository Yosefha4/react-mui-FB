import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import { myList } from "../countriesJson.json";

const AddressInput = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");

  useEffect(() => {
    myList.map((e) => setCountries((prev) => [...prev, e.country]));
  }, []);

  useEffect(() => {
    myList.map((e) => {
      if (e.country === userCountry) {
        setCities(e.city);
      }
    });
  }, [userCountry]);

  return (
    <Box flex={4} p={2}>
      <Typography p={1}>Address</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
        <InputLabel id="countries">Country</InputLabel>
        <Select
          labelId="countries"
          id="countries"
          value={userCountry}
          label="Country"
          onChange={(e) => setUserCountry(e.target.value)}
        >
          {countries &&
            countries.map((e, index) => (
              <MenuItem key={index} value={e}>
                {e}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
        <InputLabel id="cities">City</InputLabel>

        <Select
          disabled={cities.length == 0}
          labelId="cities"
          id="cities"
          value={userCity}
          label="City"
          onChange={(e) => setUserCity(e.target.value)}
        >
          {cities.map((e, index) => (
            <MenuItem key={index} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddressInput;
