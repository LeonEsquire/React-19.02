import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleLogin.js'
import { withStyles } from '@material-ui/styles';

class LoginItems extends React.Component {
    render() {
        return <input type={this.props.type} value={this.props.title} style = { styles.inputForm }/>
    }
}

LoginItems.defaultProps = {
    type: "text",
    title: "Введите логин"
};

LoginItems.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginItems);