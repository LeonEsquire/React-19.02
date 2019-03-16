import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "../components/User";
import PageNotFound from "./PageNotFound.jsx";
import getUser from "../actions/getUser";
class User extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.fetchUser(userId);
  }
  render() {
    const { error } = this.props;
    const { user } = this.props;
    return (
      <div>
        {user && !error && <UserProfile {...user.data} />}
        {error && <PageNotFound />}
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
    fetchUser: id => dispatch(getUser(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
