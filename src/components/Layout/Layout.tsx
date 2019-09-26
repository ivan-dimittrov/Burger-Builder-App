import React    from 'react';
import Aux      from '../../hoc/_Aux/_Aux'
import Toolbar  from '../Navigation/Toolbar/Toolbar'
import './layout.css'

const layout = (props: any) => (
    <Aux>
        <Toolbar />
        <main className='content'>
            {props.children}
        </main>
    </Aux>
);
export default layout;