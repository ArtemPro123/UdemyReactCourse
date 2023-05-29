import { fetchUsers } from "../store"; 
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return 'Users List';
}

export default UsersList;