import React from 'react';
import {connect} from 'react-redux'; 

const PlantDetail = () => {
  return(
    <div> plant PlantDetail</div>
  )
}

const mapStateToProps = (state) => {
  return {plantId : state.selectedPlantId}
}

export default connect(mapStateToProps)(PlantDetail)