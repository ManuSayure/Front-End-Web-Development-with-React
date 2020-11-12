import {Form, Label, FormGroup, Input, Button} from 'reactstrap';
const FormLogin = ({ innerRef, ...props }) => {   
    
    return(
            <Form onSubmit={props.handlelogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                        ref={props.innerRef}
                       // innerRef={(input) => this.username = input}
                         />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                            ref={props.innerRef}
                       // innerRef={(input) => this.password = input} 
                        />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" name="remember"
                            ref={props.innerRef}
                       // innerRef={(input) => this.remember = input}
                          />
                        Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>

    );

}; export default FormLogin;
