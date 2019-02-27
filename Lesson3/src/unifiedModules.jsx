// packages
import React from "react";
// modules import
import Login from "./modules/login.jsx";
import Menu from "./modules/menu.jsx";
// data import
import object from "./configuration.js";
const menuItems = object.header.menuItems;
// propTypes
const Unity = () => {
    return (<><Login/>
        <Menu data={menuItems}/></>)
}
export default Unity;
