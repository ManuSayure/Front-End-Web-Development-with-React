import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { DISHES } from "./dishes";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
    </div>
    );
  } 
}; export default App;
