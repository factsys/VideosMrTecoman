import actionsFunction from "./generated/VideosActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import videosApi from "../../api/videosApi";
 
 actionsFunction.loadvideosList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return videosApi
     .getvideosList()
     .then(list => {
       dispatch(actionsFunction.loadvideosSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
