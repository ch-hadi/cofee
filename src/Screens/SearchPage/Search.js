import React, { useState } from "react";
import CofeeReviewCard from "../../Components/Card";
import { search_venue } from "../../Data/venue-search/venue-search";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
// import venue from './../../Data/vanue/venue.json'
import Venue from "../Venue/Venue";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const data = search_venue.businesses;
  const [item, setItem] = useState("");
  const [Found, setFound] = useState([]);

  
  const handleChange = (e) => {
    if (e.key === "Enter") {
      const c = data.filter((i) => {
        if (i.name.toLowerCase().includes(item.toLowerCase())) {
          return i;
        }
      });

      setFound(c);
    }
  };
  return (
    <div className="search-screen-Container">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Search Cofees
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Cofee…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setItem(e.target.value);
              }}
              onKeyDown={handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Venue />

      <Grid container>
        {item == ""
          ? data.map((i) => {
              return (
                <Grid
                  item
                  xs={6}
                  lg={3}
                  md={3}
                  sm={3}
                  key={i.id}
                  className={classes.maxWidth}
                >
                  <CofeeReviewCard
                    name={i.name}
                    imageUrl={i.image_url}
                    key={i.id}
                    coordinates={i.coordinates}
                  />
                </Grid>
              );
            })
          : Found.map((i) => {
              return (
                <Grid
                  item
                  xs={6}
                  lg={3}
                  md={3}
                  sm={3}
                  key={i.id}
                  className={classes.maxWidth}
                >
                  <CofeeReviewCard
                    name={i.name}
                    imageUrl={i.image_url}
                    key={i.id}
                    coordinates={i.coordinates}
                  />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default Search;
