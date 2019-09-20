import React            from 'react';
import './burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface IIngredientsProps {
    ingredients: any
}

const burger = (props: IIngredientsProps) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
               return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
           });
        });

    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};
export default burger;