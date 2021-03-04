import React from 'react';
import {connect} from 'react-redux';

const PlantList = () => {
  // const renderList = ()
return(
  <div>
    <div>hello plant list</div>
  </div>
)
}

// configuration to connect
const mapStateToProps = (state) => {
  // console.log(state);
  return {plantList: state.plantList}
}

export default connect(mapStateToProps)(PlantList);