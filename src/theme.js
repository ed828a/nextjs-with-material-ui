import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#FF3F5A",
    },
    common: {
      background: "#1A1A1A",
      bodybackground: "#151515",
      lightblue: "#6EC1E4",
      pink: "#E83594",
      purple: "#6F0CE9",
      lightpuple: "#676DAF",
      blue: "#3f50b5",
      bluelight: "#757ce8",
      bluedark: "#002884",
      red: "#f44336",
      reddark: "#ba000d",
      redlight: "#ff7961",
      instagram: "#3f729b",
      twitter: "#1bb2e9",
      facebook: "#3b5a9b",
      green: "#68d619",
    },
    background: {
      default: "#1A1A1A",
      newsTitle: "#232323",
    },
  },
});

export default theme;
