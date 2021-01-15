import {Modal, ModalHeader, ModalBody, Form, Label, FormGroup, Input, Button} from 'reactstrap';
import React from 'react';

class FormLogin extends React.Component{    
     
    state = {
        username:'',
        remember:false,
        logado:false,
    }   

    componentDidMount() {
        const remember = localStorage.getItem('remember') === 'true';
        const username = remember ? localStorage.getItem('username') : '';
        this.setState({ username, remember });
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
    };

    handleLogin = (event) => {
        event.preventDefault();
        this.setState({ logado: true});
        console.log(this.state.logado);
        alert("Username: " + this.state.username + " Password: " + this.password.value
        + " Remember: " + this.state.remember);

          const { username, remember } = this.state;
          localStorage.setItem('remember', remember);
          localStorage.setItem('username', remember ? username : '');
          localStorage.setItem('logado', this.state.logado);

          this.props.toggleModal();
         
    };   
    handleLogout = () =>{
        localStorage.removeItem('username');
        localStorage.removeItem('remember');
        localStorage.removeItem('logado');
    }      
        

     
    render(){
        return(           
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}        
                             />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={ input => this.password = input}
                                />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    checked={this.state.remember}
                                    onChange={this.handleChange}
                               />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>             
                
        );}
}; export default FormLogin;
