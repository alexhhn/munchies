import React from "react";

const themes = {
  light: {
    spacing: 4,
    palette: {
      primary: "#007bff",
      secondary: "palevioletred",
      third: "#ff634d",
      logo: "#FCE7E7",
      money: "#27AE60",
      interaction: "#FFE898",
      priceRange: "#ffaaaa",
      backgroundColor: "#C62828",
      // cardBackgroundColor: "white",
      cardBackgroundColor: "#F5f5f5",
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
