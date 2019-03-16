import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import UserProfile from "../components/User";
import PageNotFound from "./PageNotFound.jsx";
import getUser from "../actions/getUser";
class User extends React.Component {
  state = {
    user: null,
    rejected: false
  };
  componentDidMount() {
      const { userId } = this.props.match.params;
      this.props.fetchUser(userId);
      this.forceUpdate();
      axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.userId
        }`
      )
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(() => {
        this.setState({ rejected: true });
      });
  }
  componentDidUpdate() {
      const { data } = this.props.user;
      if (data) {
      }
  }
  render() {
    return (
      <div>
        {this.state.user && <UserProfile {...this.state.user} />}
        {this.state.rejected && <PageNotFound />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      user: state.getUserReducer.user,
    error: !!state.getUserReducer.error
  };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(getUser(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
