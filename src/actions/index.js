// import jsonPlaceholder from '../api/jsonPlaceholder';

// export const fetchPosts = async () => {

// }

export const selectPlantId = plantId => {
  return {
    type: 'PLANT_ID_SELECTED',
    payload: plantId
  }
}