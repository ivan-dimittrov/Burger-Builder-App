import React           from 'react'
import './drawerToggle.css'

const drawerToggle = (props: any) => {

    return (
        <div onClick={props.clicked} className='DrawerToggle'>
            <div />
            <div />
            <div />
        </div>
    );
};
export default drawerToggle;