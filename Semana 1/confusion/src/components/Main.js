import React, { Component } from 'react';
import { DISHES } from '../dishes';
import DishDetails from './Dishdetail';
import Menu from './Menu'
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {Switch, Route, Redirect} from 'react-router-dom';



class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //selectedDish:null,
            dishes : DISHES
         };
         //this.onDishSelect = this.onDishSelect.bind(this);
         
    }
    /*onDishSelect(dishId){
        this.setState({
            selectedDish:dishId
        });

    }; */
    render() { 
      
        return(
            <div className='container'>
                <Header/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route  exact path='/menu' component={ () => <Menu  dishes={this.state.dishes} />}/>
                    <Redirect to='/home'/>
                </Switch>              
                <Footer/>
            </div>

        );
        
    }
} 
export default Main;