import React           from 'react'
import Logo            from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle    from '../SideDrawer/DrawerToggle/DrawerToggle'
import './toolbar.css'

const toolbar = (props: any) => (
    <header className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height='80%'/>
        <nav className='DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;