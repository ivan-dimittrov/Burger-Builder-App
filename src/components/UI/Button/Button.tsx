import React from 'react'
import './button.css'

const button = (props: any) => (
    <button onClick={props.clicked} className={props.type + ' Button'}>{props.children}</button>
);

export default button;