import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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



class Menu extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
           selectedDish:null
        };
    }
    onDishSelected(dish){
        this.setState({
            selectedDish:dish
        });

    };    
    
    render(){
        const menu = this.props.dishes.map(
            (dish) => {
                return(
                    <div className="col-12 col-md-5 m-1">
                        <Card key= {dish.id} 
                        onClick={ ()=> this.onDishSelected(dish)}               
                        >
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>   
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>                        
                            

                        </Card>
                        
                    </div>
                )
            }
        );
            

        return(            
            <div className= "continer">
                <div className= "row">                   
                    {menu}                    
                </div>  
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {renderDish(this.state.selectedDish)}
                    </div>
                </div>           
            </div>            
        );
    }


}export default Menu;