import React, { useState, useEffect } from "react";
import UserProfile from '../components/User';
import axios from 'axios';

const User = props => {
  const [userS, setUserS] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${props.params.userId}`)
      .then((response) => {
        setUserS(response.data);
        console.log(userS);
      });
  }, []);

  return (
    <>
      {userS && <UserProfile {...userS} />}
    </>
  );
}

export default User;
