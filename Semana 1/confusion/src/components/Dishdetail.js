import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




function RenderDetails(props){
    return(
    (props.dish != null) ?
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>        
         : <div></div>    
         )
}
/*const listComents = (props) => {
    (props.comentarios.lenght > 0) ?        
            <div>
                <h4>Comentários</h4>
                {
                    props.comentarios.map((comentario) => {
                        return(                            
                            <li key={comentario.id}>
                                <p>  {comentario.commment}<br/>
                                     {comentario.author}, {comentario.date}
                                </p>                       
                            </li>                       
                        );          
                    })               
                }      
            </div> :  
           <div></div>              
}*/
   

class DishDetails extends React.Component{
    constructor(props){
        super(props); 
        this.renderComment = this.renderComment.bind(this)  ;   
        
    }
    renderComment(comentarios){

        return ( 
            <div>
                <h4>Comentários</h4>
                {
                    comentarios.map((comentario)=> {
                        return(
                            <div>                        
                                <p>
                                {comentario.comment} <br/>
                                {comentario.author}, {comentario.date}
                                </p>
        
                            </div>
                          
                        )
                    })
                }
            </div> 
        );
      }
     
    

    render(){

        return(
            <div className="row">
                <div className="col-6">
                     <RenderDetails dish={this.props.dish}/>
                </div>
                
                <div className="col-6">
                    {this.props.dish && this.renderComment(this.props.dish.comments)}
                 </div>
               
            </div>   
        );          
    }

}; export default DishDetails;