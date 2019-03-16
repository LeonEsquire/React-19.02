import React from "react";
import CompUserpost from "../components/Userpost";
import axios from "axios";
export default class Userpost extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.params.postId}`
      )
      .then(response => {
        this.setState({ user: response.data });
      });
  }
  render() {
    return (
      <>{this.state.user ? <CompUserpost {...this.state.user} /> : null}</>
    );
  }
}
