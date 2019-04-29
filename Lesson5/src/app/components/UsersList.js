import React, { useState, useEffect } from "react";
import axios from 'axios';
import User from './User';

const UsersList = () => {
  const [userL, setUserL] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then((response) => {
        setUserL(response.data);
        console.log(userL);
      })
  }, []);

  return (
    <>
    { userL.length && (
    <div>
      <h1>Пользователи</h1>
      {userL.map((user, index) => <User key={index} {...user} />)}
    </div>
    )}
</>
}

export default UsersList;
