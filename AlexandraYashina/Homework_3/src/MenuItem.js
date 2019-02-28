import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        return (
           <li><a href={this.props.children.href}>{this.props.children.text}</a></li>
        );
    }
}

MenuItem.defaultProps = {
    children: {href: "#", text: "Главная"}
}
MenuItem.propTypes = {
    children: PropTypes.object.isRequired
}

export default MenuItem;