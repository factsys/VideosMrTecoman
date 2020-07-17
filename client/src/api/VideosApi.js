import VideosApiGenerated from "./generated/VideosApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class VideosApi extends VideosApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Videos List
  static getVideosList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/videoss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default VideosApi;