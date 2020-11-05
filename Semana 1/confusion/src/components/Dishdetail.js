import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link } from 'react-router-dom';

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
function RenderComments({comments}) {
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
                </div> 

            )
            
        } else{return(<div></div>)}
};
 

 const DishDetails = (props) => { 
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
                    {props.dish && <RenderComments comments = {props.comments}/>}
                                  
                </div> 
            </div>
            
        );          
   

}; export default DishDetails;