import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import venue from "./../../Data/vanue/venue.json";
import { MapComponent } from "../../Components/MapCompo/Map";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
   root:{
     marginTop:10
   }
}));

function Venue() {

  const classes = useStyles()
  console.log(venue);
  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <MapComponent longitude={venue.coordinates.longitude} latitude={venue.coordinates.latitude} />
    </div>
  );
}

export default Venue;
