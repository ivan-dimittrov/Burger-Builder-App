import React from 'react'
import Aux from '../../../hoc/_Aux/_Aux'

const orderSummary = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
       return <li key={ingredientKey}>
           <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span> : {props.ingredients[ingredientKey]}
       </li>
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;