import React from 'react';
import Aux from '../../hoc/_Aux/_Aux'
import './layout.css'

const layout = (props: any) => (
    <Aux>
        <div>

        </div>
        <main className='content'>
            {props.children}
        </main>
    </Aux>
);
export default layout;