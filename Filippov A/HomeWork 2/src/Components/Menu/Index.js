import React, { Component, Fragment } from 'react';
import { styles } from './style.js';
import MenuItem from './MenuItem';


export default class Menu extends Component {
    render() {
        //console.log(this.props);
        const items = this.props.items.map((item, index)=> {
            return <MenuItem key={index} href={item.href}>{item.title}</MenuItem> 
        });

        return (
            <Fragment>
                <h1 style = { styles.header }>{ this.props.titleMenu }</h1>
                <ul style = { styles.ul } >
                    {items} 
                </ul>
            </Fragment>
        )
    }
}

