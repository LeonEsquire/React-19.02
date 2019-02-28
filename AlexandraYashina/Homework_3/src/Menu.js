import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItem key={index}>{item}</MenuItem>
        });
        return (<div className="menu">
            <h1>{this.props.menuTitle}</h1>
            <ul>
                {items}
                </ul>
            </div>
        )
    }
}

export default Menu;