export const selectPlantId = plantId => {
  return {
    type: 'PLANT_ID_SELECTED',
    payload: plantId
  }
}