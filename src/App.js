import React from 'react';
import './App.css';
// import { MapComponent } from './Components/MapCompo/Map';
// import Search from './Screens/SearchPage/Search';
// import Mapp from './MapScreen/Mapp';
import { AllRoutes } from './Routs/Routs';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import  {Home,SearchOutlined , Star}  from '@material-ui/icons';
// import { Star } from '@material-ui/icons';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Route, Routes, useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  root: {
  //  display:'flex',
   position:'sticky',
   bottom:'0%',
  //  width:'100%',
  },
});

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navigate= useNavigate();

  const handleSearchCofee=()=>{

    navigate(`reviews`)

  }


  return (
    <div className="App">
       
      <header className="App-header">
        <AllRoutes/>
      </header>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<Home />} onClick={()=>{navigate('/')}}/>
        <BottomNavigationAction label="Search Cofee" icon={<SearchOutlined />} onClick={()=>{navigate('search-cofee')}} />
        <BottomNavigationAction label="Reviews" icon={<Star />} onClick={()=>{navigate(`reviews`)}}/>
      </BottomNavigation>
    </div>
  );
}

export default App;
