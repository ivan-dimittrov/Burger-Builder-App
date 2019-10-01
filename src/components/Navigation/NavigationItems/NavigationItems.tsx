import React, {useLayoutEffect} from 'react'
import './navigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'


const navigationItems = (props: any) => (
    <ul className='NavigationItems'>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;