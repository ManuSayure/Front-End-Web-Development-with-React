import React, {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, 
    BreadcrumbItem, Breadcrumb, Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import {Link } from 'react-router-dom';
import {  Col, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form'
import { Loading } from './Loading';
import { Comments } from "../redux/comments";
import {baseUrl} from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
//import FormComment from './FormComment';
//const comments = useSelector(state => state.comments)
//const dispatch = useDispatch()

console.log(Comments);

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderDish({errMess, isLoading, dish}){   
    console.log();
    
        if (isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (dish != null){ 
                return(
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in tranformProps={{ exitTransform:'scale(0.5) translateY(-50%0'}}>
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card> 
                    </FadeTransform>
                </div>  
              );
        }     
    
}
function RenderComments({comments, postComment, dishId, commentsErrMess}) { 
   
    if (commentsErrMess) {
        return(
            <h4>{this.props.errMess}</h4>
         );
    } 
    else if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comentários</h4>                
                    <ul className="list-unstyled"> 
                        <Stagger in >
                            {comments.map((comment) => {  
                                return( 
                                        <Fade in>                 
                                            <li key={comment.id}>                        
                                            <p>
                                                {comment.comment} <br/>
                                                -- {comment.author},
                                    {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'})
                                                                .format( new Date(Date.parse(comment.date )))}
                                            </p>
                                            </li> 
                                    </Fade>  
                                );        
                            })}
                        </Stagger>
                    </ul>  
                    <CommentForm dishId={dishId} postComment={postComment}/>               
                </div> 

            )
            
    } else{
            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4> Be the first to comment</h4>
                        <CommentForm dishId={dishId} postComment={postComment}/>  
                    </div>
            )
        }
};


class CommentForm extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            showModalComment:false  
        };
        this.options = [1, 2, 3, 4, 5];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this); 
        console.log(this.props);          
         
    }
   
    toggleModal = () => {
        console.log('click');
        this.setState({showModalComment : !this.state.showModalComment})
        
        console.log(this.state.showModalComment)
     } ; 
 
    handleSubmit =  (values) => { 
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);   
    };  
       

   render(){
       
        return(
       <div>
           <Button  color='secondary' onClick = {this.toggleModal}> <span> <i className="fa fa-pencil fa-lg "></i></span> Submit Comment</Button>
           <Modal isOpen={this.state.showModalComment}>
               <ModalHeader toggle={this.toggleModal}  >
               Submit                 
               </ModalHeader>
               <ModalBody> 
               <LocalForm onSubmit={ ()=> this.handleSubmit}>
                   <Row>
                       <Label for="selectRating" md={10}>Rating</Label>
                       <Col md={12}>
                           <Control.select 
                               model=".seletRating"
                               name="seletRating"
                               default= '1'
                               className="form-control custom-select mr-sm-2">                             
                                   { this.options.map( 
                                       (i) => {  
                                           if(i === 1){
                                            return(<option key={i} selected>{i}</option>)
                                           }
                                           return( <option key={i}>{i}</option>); 
                                   })}
                           </Control.select>                    
                       </Col> 
                       <Errors
                                           className="text-danger"
                                           model=".seletRating"
                                           show="touched"
                                           messages={{
                                               required: 'Required'                                           
                                           }}
                               />                
                   </Row>
   
                   <Row>
                       <Label htmlFor="author" md={10}> Your Name</Label>
                           <Col md={12}>
                               <Control.text 
                                   model=".author" 
                                   id="author" name="author"
                                   placeholder="Your Name"
                                   className="form-control"
                                   validators={{
                                       required,
                                       minLength: minLength(3),
                                       maxLength: maxLength(15)
                                   }}
                               />
                               <Errors
                                           className="text-danger"
                                           model=".name"
                                           show="touched"
                                           messages={{
                                               required: 'Required',
                                               minLength: 'Must be greater than 2 characters',
                                               maxLength: 'Must be 15 characters or less'
                                           }}
                               />
                           </Col>        
   
   
                   </Row>
   
                   <Row className="form-group">
                           <Label htmlFor="comment" md={10}> Comment</Label>
                           <Col md={12}>
                               <Control.textarea model=".comment" id="comment" name="comment"
                                   rows="6"
                                   className="form-control" />
                           </Col>
                       </Row>
                   <Row>
                       <Col md={{size:10, offset: 0}}>
                       <Button type='button' color='primary' onClick = {this.toggleModal}>Submit</Button> 
                       </Col>
                   </Row>
   
               </LocalForm>   
               </ModalBody>
       </Modal>
       </div>
       
   );    
}
}


class DishDetails extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.isLoading);
        
    } 
    render(){  
        if (this.props.isLoading) {
            return(
                    <Loading />
            );
        }
        else if (this.props.errMess) {
            return(
                    <h4>{this.props.errMess}</h4>
            );
        }
        else{
            console.log('aqui');
            console.log(this.props);
            
            return(
                
                <div className= "container"> 
                    <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr />
                            </div>                
                        </div>           
                    <div className="row">
                    <RenderDish 
                        dish={this.props.dish}
                        isLoading={this.props.isLoading}
                        errMess={this.props.errMess}
                    /> 

                    <RenderComments 
                        comments = {this.props.comments}
                        postComment={this.props.postComment}
                        dishId={this.props.dish.id}
                        commentsErrMess={this.props.commentsErrMess}

                                
                        />                                 
                    </div>                    
                
                </div>
                

            );
        }
    }
}
export default DishDetails;