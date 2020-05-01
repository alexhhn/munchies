import React from "react";

const themes = {
  light: {
    spacing: 4,
    palette: {
      primary: "#007bff",
      secondary: "palevioletred",
      third: "#ff634d",
      priceRange: "#ffaaaa",
      backgroundColor: "white",
      cardBackgroundColor: "white",
    },
  },
  dark: {
    spacing: 4,
    palette: {
      primary: "white",
      secondary: "white",
      third: "white",
      priceRange: "darkgray",
      // backgroundColor_two: "#081B33",

      //https://material.io/design/color/dark-theme.html#properties
      backgroundColor: "#1F1A24", // Material reccommended dark theme surface color
      // backgroundColor: "#332940", //2.versjon
      cardBackgroundColor: "#121212", // Material reccommended dark theme surface color
    },
  },
};
export default themes;