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
        this.renderComment = this.renderComment.bind(this);
        this.getFormatDate = this.getFormatDate.bind(this);  
        
    }
    getFormatDate(date){
        var d = new Date(date);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = months[d.getMonth()];
        var day = d.getDate().toString().padStart(2, '0');
        var year = d.getFullYear();
        console.log(month + " "+ day +", " + year);
        var date = month + " "+ day +", " + year;
        return(date);
    }
    renderComment(comentarios){
        var allComents = null;
        allComents= comentarios.map((comentario)=> {  
            return(                    
                <li key={comentario.id}>                        
                    <p>
                    {comentario.comment} <br/>
                    -- {comentario.author}, {this.getFormatDate(comentario.date)}
                    </p>

                </li> 
            )         
          });
        if(allComents != null){
            return(
                <div>
                    <h4>Comentários</h4>                
                    <ul className="list-unstyled">
                        {allComents}
                    </ul>
                </div> 

            )
            
        } else{return(<div></div>)}
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