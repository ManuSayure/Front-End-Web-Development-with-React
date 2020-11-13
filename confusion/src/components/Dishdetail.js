import React, {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, 
    BreadcrumbItem, Breadcrumb, Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import {Link } from 'react-router-dom';
import FormComment from './FormComment';

const CommentForm= (props) =>{
    return(
        <Modal isOpen={props.isOpenModalComment}>
                <ModalHeader toggle={props.toggleModal}  >
                Submit 
                    
                </ModalHeader>
                <ModalBody> 
                    <FormComment {...props}/>
                </ModalBody>
        </Modal>
    );    
};


function RenderDetails({dish}){
    
    return(
    (dish != null) ?
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card> 
        </div>       
         : <div></div>    
         )
}
function RenderComments({comments, toggleModal}) {

    var allComments = null;
        allComments = comments.map(
            (comment) => {  
                return(                    
                    <li key={comment.id}>                        
                        <p>
                            {comment.comment} <br/>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'})
                                                            .format( new Date(Date.parse(comment.date )))}
                        </p>
                    </li> 
                )         
          });
        if(allComments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comentários</h4>                
                    <ul className="list-unstyled">
                        {allComments}
                    </ul>  
                    <Button type='submit' color='secondary' onClick = {toggleModal}>Submit Comment</Button>                
                </div> 

            )
            
        } else{
            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4> Be the first to comment</h4>
                        <Button type='sub' color='secondary' onClick = {toggleModal}>Submit Comment</Button>
                       
                    </div>
            )
        }
};
 

 const DishDetails = (props) => { 

    const [isOpenModalComment, setIsOpenModalComment] = useState(false);

     const toggleModal = () =>{
         console.log('click');
         setIsOpenModalComment(!isOpenModalComment)
         console.log(isOpenModalComment)
      }  

     return(
            <div className= "container"> 
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>           
                <div className="row">
                    <RenderDetails dish={props.dish}/>            
                    {props.dish && <RenderComments 
                    comments = {props.comments}
                    toggleModal= {toggleModal}
                    
                    />}                                  
                </div>
                <CommentForm 
                    isOpenModalComment={ isOpenModalComment}
                    toggleModal= {toggleModal}
                /> 
                
               
            </div>
            
        );          
   

}; export default DishDetails;