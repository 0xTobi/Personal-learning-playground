export const CommonReducer = (...reducers) => (storeData, action) => { 

    for (let i = 0; i < reducers.length; i++ ) { 
        let newStore = reducers[i](storeData, action); 
        if (newStore !== storeData) { 
            return newStore;
        } 
    }
    return storeData;
}

// Here we combine multiple reducers and allow the access to the data srore.
// We iterate over each reducer
// And ofc, we know reducers returns new objects when they modify the contents of the data store.
// The result of this function is that the first reducer to change the data store is considered to have processed the action.