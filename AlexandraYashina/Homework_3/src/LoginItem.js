import React from 'react';
import PropTypes from 'prop-types';

class LoginItem extends React.Component {
    render() {
        return (
           <input type={this.props.children.type} placeholder={this.props.children.placeholder}></input>
        );
    }
}

LoginItem.defaultProps = {
    children: {type: "text", placeholder: ""}
}
LoginItem.propTypes = {
    children: PropTypes.object.isRequired
}

export default LoginItem;