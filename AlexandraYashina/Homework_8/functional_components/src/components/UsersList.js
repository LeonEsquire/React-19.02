import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';
import User from '../components/User';
import axios from 'axios';

const UsersList = props => {
//у меня строчка ниже получается вообще не используемая.
  const [usersList, setUserList] = useState([]);

//у меня не получается в usersList отправить данные, полученные через props.dispatch(fetchUsers());
//закомментированный хук ниже не знаю как правильно переписать
  // useEffect(() => {
  //   const usersData = props.dispatch(fetchUsers());
  //   console.log(usersData);
  //   const users = [];
  //   for (let key in usersData) {
  //     users.push({...usersData[key]})
  //   }
  //   setUserList(users);

  //   return () => {
  //     console.log('cleanup');
  //   };
  // }, []);
//как неправильное решение этой проблемы, в итоге в return просто обращаюсь напрямую к props.
//А надо ведь использовать данные из [usersList, setUserList]
  useEffect(() => {
    props.dispatch(fetchUsers());
  }, []);

  //вот здесь - мне приходится применять map к props.users, а должно быть usersList.map
  return (
    <>
      <h1>Пользователи</h1>
      {props.users.map(user => (
          <User key={user.id} {...user} />
        ))}
    </>
    );
}

function mapStateToProps(state) {
    return {
      users: state.users.users,
      usersFetched: state.users.fetched
    };
  }

export default connect(mapStateToProps)(UsersList);