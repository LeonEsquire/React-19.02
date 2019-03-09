import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import LoginItems from './LoginItems';
import styles from './StyleLogin.js';

class Login extends Component {
    render() {
        const loginItems = [
            {type: "text", title: "Введите ваш логин"},
            {type: "password", title: "Введите ваш пароль"},
            {type: "button", title: "Войти"}
        ];

        const items = loginItems.map((item, index) => {
            return <LoginItems key={index} type={item.type} value={item.title} />
        });

        return (
            <div style = { styles.container }>
                <h3>{this.props.titleLogin}</h3>
                <form>
                    {items}
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Login);