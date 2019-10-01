import React from 'react'
import './modal.css'
import Aux from '../../../hoc/_Aux/_Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props: any) => {
    return (
        <Aux>
            <Backdrop show={props.showModal} clicked={props.closeModal}/>
            <div className={props.showModal ? 'Modal' : 'Hide-modal'}>
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;