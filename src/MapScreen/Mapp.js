import React from 'react'
import { MapComponent } from '../Components/MapCompo/Map'
import { useParams } from "react-router-dom";

function Mapp() {
 const {params}  = useParams()
 console.log(params)

//  console.log('oooo', d)
  return (
    <div>
      <h1>Hello OK</h1>
      {/* <MapComponent /> */}
    </div>
  )
}

export default Mapp