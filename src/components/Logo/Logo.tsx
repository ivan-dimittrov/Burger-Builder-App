import React      from 'react'
import burgerLogo from '../../assets/burger-logo.png'
import './logo.css'

const logo = (props: any) => (
    <div className='Logo' style={{height: props.height}}>
        <img src={burgerLogo} alt="logo"/>
    </div>
);

export default logo;