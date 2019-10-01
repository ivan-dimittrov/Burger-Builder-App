import React    from 'react'
import './navigationItem.css'

const navigationItem = (props: any) => (
    <li className='NavigationItem'>
        <a href={props.link} className={props.active ? 'active' : ''}>{props.children}</a>
    </li>
);

export default navigationItem;