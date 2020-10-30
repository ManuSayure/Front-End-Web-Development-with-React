const renderDish = (dish) => {
    if(dish != null){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>        
        );
    }else{
        return(
            <div></div>
        );
    }

}
const listComents = (comentarios) =>{
    if(comentarios){
        return(
            <div>
                <h4>Comentários</h4>
                {
                    comentarios.map((comentario) => {
                        return(
                            
                            <li key={comentario.id}>
                                <p>  {comentario.commment}<br/>
                                     {comentario.author}, {comentario.date}
                                </p>                       
                            </li>                       
                        );          
                    })               
                }      
            </div>    
           
         )

    }
   
}
class DishDetails extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){

        return(
            {(this.props.dish)}
            

        )
    }


}; export default DishDetails;