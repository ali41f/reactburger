import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredient = [];
    for(let ingredientName in props.ingredients){
        ingredient.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        });
    }
    const ingredientOutput = ingredient.map(ig => {
        return <span 
        style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0',
                border: '1px solid #ccc',
                padding: '5px'}}
        key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: USD {props.price.toFixed(2)}</p>
        </div>
    );    
};

export default order;