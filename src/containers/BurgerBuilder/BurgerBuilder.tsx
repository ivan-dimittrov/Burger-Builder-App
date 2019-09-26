import React         from 'react';
import Aux           from '../../hoc/_Aux/_Aux'
import Burger        from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal         from '../../components/UI/Modal/Modal'
import OrderSummary         from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends React.Component {

    constructor(props: any) {
        super(props);
        document.addEventListener('keydown', this.handleEscapePress);
    }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        showModal: false
    };

    public componentWillUnmount(): void {
        document.removeEventListener('keydown', this.handleEscapePress);
    }

    public updatePurchaseState(updatedIngredients: any) {
        const sum = Object.keys(updatedIngredients).map(ingredientsKey => {
            // @ts-ignore
            return updatedIngredients[ingredientsKey];
        }).reduce((sum, el) => {
            return sum + el;
        },0);

        this.setState({purchasable: sum > 0});
    }

    public addIngredient = (type: any) => {
        // @ts-ignore
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // @ts-ignore
        updatedIngredients[type] = updatedCount;
        // @ts-ignore
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    public removeIngredient = (type: any) => {
        // @ts-ignore
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            // @ts-ignore
            updatedIngredients[type] = updatedCount < 0 ? 0 : updatedCount;
            // @ts-ignore
            const priceDeduction = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice - priceDeduction < 4 ? 4 : this.state.totalPrice - priceDeduction;
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
            this.updatePurchaseState(updatedIngredients);
        }
    };

    public purchaseHandler =() => {
        this.setState({showModal: true});
    };

    public handleEscapePress = (e: any): void => {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    };

    public closeModal = () =>{
        this.setState({showModal:false});
    };

    public purchaseContinueHandler = () =>{
        alert('You continue');
    };

    public render () {
        return (
            <Aux>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        closeModal={this.closeModal}
                        continue={this.purchaseContinueHandler}
                        price={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded   = {this.addIngredient}
                    ingredientRemoved = {this.removeIngredient}
                    price             = {this.state.totalPrice}
                    purchasable       = {this.state.purchasable}
                    showModal         = {this.purchaseHandler}
                />
            </Aux>

        );
    }
}
export default BurgerBuilder;