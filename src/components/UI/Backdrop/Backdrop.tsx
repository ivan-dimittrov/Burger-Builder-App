import React from 'react'
import './backdrop.css'

const backdrop = (props: any) => (
  props.show ? <div className='Backdrop' onClick={() => props.clicked()} /> : null
);

export default backdrop;