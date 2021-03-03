const selectedPlantIdReducer = (selectedPlantId = null, action) => {
  if(action.type === 'PLANT_ID_SELECTED'){
    return action.payload
  }
  return selectedPlantId;
}