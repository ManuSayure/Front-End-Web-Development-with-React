import React, { Component } from 'react';
import { DISHES } from '../dishes';
import {Navbar, NavbarBrand} from "reactstrap";
import DishDetails from './Dishdetail';
import Menu from './Menu'

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu 
                    dishes={this.state.dishes}
                    onClick={this.onDishSelect}
                />
                <DishDetails
                dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}       
                />
            </div>

        );
        
    }
} 
export default Main;