import React from "react";
import PropTypes from "prop-types";

class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

MenuItem.defaultProps = {
  children: "Главная страница",
  href: "/"
};

MenuItem.propTypes = {
  children: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired
};

export default MenuItem;
