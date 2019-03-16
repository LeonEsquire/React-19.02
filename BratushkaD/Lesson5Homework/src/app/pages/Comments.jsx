import React from "react";
import CompComments from "../components/Comments";
export default class Comments extends React.Component {
  render() {
    return (<>
        {!this.props.children ? (
          <div className="userpostscontainer"><CompComments /></div>
        ) : this.props.children }
      </>);
  }
}
