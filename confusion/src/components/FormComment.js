import React from 'react';
import {Button, Row, Col, Label} from 'reactstrap';
import {Control, LocalForm, Erros} from 'react-redux-form'

class FormComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment:{
                rating: "",
                name: "", 
                message: ""
            }

        }
    }
    render(){
            var options = [1, 2, 3, 4, 5]
            var result = null;            
            result = options.map( 
                   (i) => {  
                       return( <option>{i}</option>); 
               })
                                                       
                    

            


        return(
            <LocalForm>
                <Row>
                    <Label for="selectRating" sm={2}>Rating</Label>
                    <Col>
                        <Control.select 
                            model=".seletRating"
                            name="seletRating"
                            className="form-control"                        >                             
                                {result}
                        </Control.select>                    
                    </Col>                 
                </Row>
                <Row>


                </Row>
                <Row>

                </Row>
                <Row>
                    <Col>
                    <Button color='primary' onClick = {this.props.toggleModal}>Submit</Button> 
                    </Col>
                </Row>

            </LocalForm>
        );
    }

}; export default FormComment;