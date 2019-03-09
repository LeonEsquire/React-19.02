import React, {Component} from 'react';
import LoginItems from './LoginItems';
import { styles } from './StyleLogin.js'

class Login extends Component {
    render() {

        const items = this.props.items.map((item, index) => {
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

export default Login;