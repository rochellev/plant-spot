import React, { useState, useEffect } from "react";
import PlantList from './PlantList';
import PlantDetail from './PlantDetail';
const App = () => {
  return(
    <div>
      <div><PlantList /> </div>
      <div><PlantDetail /> </div>
      
    </div>
  )
}

export default App;