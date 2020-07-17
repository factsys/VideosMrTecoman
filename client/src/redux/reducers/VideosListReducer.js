// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function videosListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_VIDEOS_SUCCESS:
      return { ...state, listVideos: action.payload };
    case types.DELETE_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}