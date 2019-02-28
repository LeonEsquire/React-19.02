import React from 'react';
import LoginItem from './LoginItem';

class Login extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <LoginItem key={index}>{item}</LoginItem>
        });
        return (<div className="login">
            <h1>{this.props.loginTitle}</h1>
            <form action=" " method="POST">
                {items}
                <button type="submit">Войти</button>
            </form>
            </div>
        )
    }
}

export default Login;