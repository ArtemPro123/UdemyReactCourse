import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch' , async () => {
  const response = await axios.get('http://localhost:3005/users');

  await pause(2000);

  return response.data;
});

//DEV ONLY
//Adding browser loading pause
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export {fetchUsers};

//these automatically created 
//fetchUsers.pending == 'users/fetch/pending'
//fetchUsers.fulfilled == 'users/fetch/fulfilled'
//fetchUsers.rejected == 'users/fetch/rejected'