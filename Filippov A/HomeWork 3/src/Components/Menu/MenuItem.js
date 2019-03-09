import React from 'react';
import { styles } from './style.js';

class MenuItem extends React.Component {
    render() {
        return (
        <li style = { styles.li }>
            <a href={this.props.href}>{this.props.children}</a>
        </li>);
    }
}

export default MenuItem;