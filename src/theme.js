import {
    grey,
    lightBlue,
    deepPurple
  } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export function getTheme(darkState = false) {
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? grey[900] : lightBlue[900];
    const mainSecondaryColor = darkState ? '#616161' : deepPurple[500];
    return createMuiTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor
        },
        secondary: {
          main: mainSecondaryColor
        }
      }
    });
    
}