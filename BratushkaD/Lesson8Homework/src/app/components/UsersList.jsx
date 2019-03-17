import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then(response => {
      setUsers(response.data)
    });
  },[]);

  const processUsers = () => {
    return users.map((user, index) => {
      return <User key={index} {...user} />;
    });
  };
  
  if (!users.length) {
    return null;
  }

  return (
    <div>
      <h1>Пользователи</h1>
      { users.length ? processUsers() : null }
    </div>
  );
};
export default UsersList;
