import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#736F72",
  },
  link: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 40,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Covid Tracker
          </Typography>
          <Button
            component={Link}
            to="/"
            className={classes.link}
          >
            Cases
          </Button>
          <Button
            component={Link}
            to="/vaccines"
            className={classes.link}
          >
            Vaccines
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
