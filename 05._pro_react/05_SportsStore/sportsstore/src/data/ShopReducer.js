// /** @format */

import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return { 
          ...storeData, 
          [action.payload.dataType]: action.payload.data };
    //   If the action type == "data_load", then create a new oblect with all the properties of the old store plus the new data received in the action,
    default:
      return storeData || {};
    //   If  the action type isn't recognised, return the received data store unchanged.
  }
};
