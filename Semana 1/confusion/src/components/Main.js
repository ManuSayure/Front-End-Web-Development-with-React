import React, { Component } from 'react';
import { DISHES } from '../dishes';
import DishDetails from './Dishdetail';
import Menu from './Menu'
import Footer from './Footer';
import Header from './Header';



class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null,
            dishes : DISHES
         };
         this.onDishSelect = this.onDishSelect.bind(this);
         
    }
    onDishSelect(dishId){
        this.setState({
            selectedDish:dishId
        });

    }; 
    render() { 
        return(
            <div className='container'>
                <Header/>
                <Menu 
                    dishes={this.state.dishes}
                    onClick={this.onDishSelect}
                />
                <DishDetails
                dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}       
                />
                <Footer/>
            </div>

        );
        
    }
} 
export default Main;