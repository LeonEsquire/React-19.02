import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "../components/User";
import PageNotFound from "./PageNotFound.jsx";

const User = props => {
  const [user, setUser] = useState(null);
  const [rejected, setRejected] = useState(false);
  useEffect(() => {
    const { userId } = props.match.params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
        setUser(response.data);
      }).catch(() => {
        setRejected(true);
      });
  }, []);
  return (
    <div>
      {user && <UserProfile {...user} />}
      {rejected && <PageNotFound />}
    </div>
  );
};
export default User;
