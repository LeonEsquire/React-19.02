import React from 'react';
import Menu from '../Components/Menu';
import MenuItem from '../Components/MenuItems';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'React Blog';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href='/' active={this.isActive('/')}>
                        Главная
                    </MenuItem>
                    <MenuItem href='users' active={this.isActive('/users')}>
                        Пользователи
                    </MenuItem>
                    <MenuItem href='posts' active={this.isActive('/posts')}>
                        Посты
                    </MenuItem>
                    <MenuItem href='comments' active={this.isActive('/comments')}>
                        Комментарии
                    </MenuItem>
                </Menu>

                <div className="container"> 
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>

                <footer className="card-footer">
                    &copy; 2019 &#128368;
                </footer>
            </div>
        );
    }
}