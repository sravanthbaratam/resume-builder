import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

// import { makeStyles } from '@mui/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// const theme = createTheme()
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
// const useStyles = makeStyles(
//   (theme) => ({
//     affected: {
//       textAlign: 'right',
//     },
//     unaffected: {
//       flip: false,
//       textAlign: 'right',
//     },
//   }),
//   { defaultTheme },
// );
export function App() {
  // const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Resume Builder</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Resume />
    </div>
    // </ThemeProvider>
  );
}

export default App;
