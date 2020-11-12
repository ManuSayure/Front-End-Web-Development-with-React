import React,  { useState } from 'react';
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import FormLogin from './FormLogin';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }    

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
  
    render(){
        return(
            <React.Fragment>        
                <Navbar dark expand="lg">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>                
                            <NavbarBrand className='mr-auto' href='/'>
                                <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/home'>
                                            <span className='fa fa-home fa-lg'/>
                                              Home
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem>
                                        <NavLink className='nav-link' to='/aboutus'>
                                            <span  className=' fa fa-info fa-lg'/>
                                             About Us
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem>
                                        <NavLink className='nav-link' to='/menu'>
                                            <span className='fa fa-list fa-lg'/>
                                            Menu
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem>
                                        <NavLink className='nav-link' to='/contactus'>
                                            <span className='fa fa-address-card fa-lg'/>
                                             Contact Us                                    
                                        </NavLink>
                                    </NavItem>                            
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                        </NavItem>
                                    </Nav>
        
                            </Collapse>                
                    </div>
                </Navbar>
        
                <Jumbotron>
                    <div className='container'>
                        <div className='row-row-header'>
                            <div className='col-12 col sm-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines,
                                 and create a unique fusion experience. Our lipsmacking 
                                 creations will tickle your culinary senses!</p>
        
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader >Login</ModalHeader>
                            <ModalBody> 
                                <FormLogin
                                //innerRef={(el) => (autoFocusRef.current = el)}
                                innerRef={(el) => (this.inputElement = el)}
                                handleLogin={this.handleLogin}
                                />                  
                               
                            
                            </ModalBody>
                </Modal>
            </React.Fragment>
            );
        }   
    

}; export default Header;