import React from "react";
import PropTypes from "prop-types";
import object from "../configuration.js";
const items = object.header.menuItems;
const Menu = (props) => {
    const loadItems = () => {
        return props.data.map((item) => {
            return (<li key={item.id}><a href={item.href} key={item.id}>{item.text}</a></li>)
        })
    }
    const process = () => {
        return (<><ul>{loadItems()}</ul></>)
    }
    return (<>{process()}</>)
}
Menu.propTypes = {
    data: PropTypes.array.isRequired
}
export default Menu;
