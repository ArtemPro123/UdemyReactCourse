import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlices";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export * from './thunks/fetchUsers';

//Ways of storing data
//Denormalized Form
//Easier to use if the data is already structured as you need it.
//Good if your project has rock solid requirements that won't change
//This is where all information is stored under an id in an array


//Normalized Form
//More flexible. with a little code, we cna easily figure out any relationship
//Downside: More code to write.
//Where you have two arrays linked by an ID.