import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

const Layout = props => {

  const brand = 'React blog!';

  const isActive = (href) => {
    return window.location.pathname === href;
  }

  return (
    <div>
      <Menu brand={brand}>
        <MenuItem href="/" active={isActive('/')}>
          Главная
          </MenuItem>
        <MenuItem href="/users" active={isActive('/users')}>
          Пользователи
          </MenuItem>
      </Menu>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {props.children}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        &copy; 2019 React
        </footer>
    </div>
  );
}

export default Layout;