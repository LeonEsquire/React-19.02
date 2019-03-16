import React from "react";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import { Route, Switch } from "react-router-dom";
// react-router imports
import MainPage from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";
import Users from "../pages/Users";
import User from "../pages/User";

const Layout = () => {
  const brand = "React blog!";
  const isActive = href => {
    return window.location.pathname === href;
  };
  return (
    <>
      <Menu brand={brand}>
        <MenuItem href="/" active={isActive("/")}>
          Главная
        </MenuItem>
        <MenuItem href="/users" active={isActive("/users")}>
          Пользователи
        </MenuItem>
      </Menu>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/users/:userId" component={User} />
              <Route path="/users" component={Users} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
      <footer className="card-footer">&copy; 2019</footer>
    </>
  );
};
export default Layout;
