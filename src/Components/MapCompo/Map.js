import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '400px'
};


export function MapComponent(props) {


    const center ={
    
        lng : props.longitude,
        lat:props.latitude,
       
    }
    console.log(center)
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDaLspkx8QhwGqLwpeHBYddGCdJ7fPVXas"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
       
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
