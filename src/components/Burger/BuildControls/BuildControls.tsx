import React        from "react";
import './buildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props: any) => {
    return (
        <div className='buildControls'>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl
                    key       = {ctrl.label}
                    label     = {ctrl.label}
                    added     = {() => props.ingredientAdded(ctrl.type)}
                    removed   = {() => props.ingredientRemoved(ctrl.type)}
                />
            })}
            <button
                className='OrderButton'
                disabled={!props.purchasable}
                onClick={() => props.showModal()}>
                ORDER NOW
            </button>
        </div>
    );
};
export default buildControls;