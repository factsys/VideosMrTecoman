import VideosModelGenerated from "./generated/VideosModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = VideosModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await VideosModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...VideosModelGenerated,
  ...customModel
};
