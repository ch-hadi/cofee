import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import venue from "./../../Data/vanue/venue.json";
import { MapComponent } from "../../Components/MapCompo/Map";
import { makeStyles } from "@material-ui/core";
import VenueCard from "../../Components/ContactVanuCard/VenueCard";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginLeft: 10,
    display: "flex",
  },
}));

function Venue() {
  const classes = useStyles();
  console.log(venue);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MapComponent
        longitude={venue.coordinates.longitude}
        latitude={venue.coordinates.latitude}
      />
      <VenueCard
        name={venue.name}
        categories={venue.categories}
        imageUrl={venue.image_url}
        phone={venue.display_phone}
        address={venue.location}
        open ={venue.is_closed} 
        
      />
    </div>
  );
}

export default Venue;
