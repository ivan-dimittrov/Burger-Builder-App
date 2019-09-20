import React  from 'react';
import Aux    from '../../hoc/_Aux/_Aux'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    };

    public render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>

        );
    }
}
export default BurgerBuilder;