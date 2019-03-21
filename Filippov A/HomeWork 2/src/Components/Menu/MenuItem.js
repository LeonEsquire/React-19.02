import React from 'React';
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