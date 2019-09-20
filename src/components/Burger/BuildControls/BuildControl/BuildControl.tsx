import React from "react";
import './buildControl.css'

const buildControl = (props: any) => {
    return (
        <div className='buildControl'>
            <div className='Label'>
                <span style={{width:'200px'}}>{props.label}</span>
                <button className='Less' onClick={props.removed}>Less</button>
                <button className='More' onClick={props.added}>More</button>
            </div>
        </div>
    );
};
export default buildControl;