import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "tss-react/mui";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu as MenuIcon } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const useStyles = makeStyles()(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Resume Builder
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Resume />
      </div>
    </ThemeProvider>
  );
}

export default App;
