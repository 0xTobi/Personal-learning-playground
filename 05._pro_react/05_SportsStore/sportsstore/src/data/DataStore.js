// /** @format */

import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));

// The redux package provides the createStore function, which sets up a new data store using a reducer.
// This is the actual redux data store.
