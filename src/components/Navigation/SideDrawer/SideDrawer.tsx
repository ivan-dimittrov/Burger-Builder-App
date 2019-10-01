import React           from 'react'
import Logo            from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop        from '../../UI/Backdrop/Backdrop'
import Aux             from '../../../hoc/_Aux/_Aux'
import './sideDrawer.css'

const sideDrawer = (props: any) => {

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={`SideDrawer ${props.open ? 'Open':'Close'}`}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};
export default sideDrawer;
