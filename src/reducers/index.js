import { combineReducers } from "redux";

const plantListReducer = () => {
  return [
    { id: 1, common_name: "Daisy" },
    { id: 2, common_name: "Orchid" },
    { id: 3, common_name: "Lemon Tree" },
    { id: 4, common_name: "Big Tree" }
  ];
};
const selectedPlantIdReducer = (selectedPlantId = null, action) => {
  if (action.type === "PLANT_ID_SELECTED") {
    return action.payload;
  }
  return selectedPlantId;
};


export default combineReducers({
    plantList: plantListReducer,
    selectedPlantId: selectedPlantIdReducer
})