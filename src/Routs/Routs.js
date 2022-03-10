import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Mapp from "../MapScreen/Mapp";
import Search from "../Screens/SearchPage/Search";
import ReviewScreen from "../Screens/ReviewScreen/ReviewScreen";
import { makeStyles } from '@material-ui/core/styles';
import Venue from "../Screens/Venue/Venue";



const useStyles = makeStyles({
  root: {
   display:'flex',
   position:'absolute',
   bottom:0,
   width:'100%',
  },
});

export const AllRoutes = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navigate= useNavigate();


  return (
    <div className="App">
       
      <Routes>
      <Route path="/" excet element={<Venue />} />
        <Route path="/search-cofee" element={<Search />} />
        <Route path="/map-location" element={<Mapp />} />
        <Route path="/reviews" element={<ReviewScreen />} />
      </Routes>

     
    </div>
  );
}


