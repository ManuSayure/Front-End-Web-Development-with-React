import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {baseUrl} from '../shared/baseURL';

function RenderMenuItem({dish, onClick}) {
    console.log(dish)
    return(
        <div  className="col-12 col-md-5 m-1">
            <Card>
                 <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%"  src={baseUrl + dish.image} alt={dish.name}/>   
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>  
                </Link>                    
            </Card>  
        </div>       
    );
};
      
const Menu = (props) =>{
    
        const menu = props.dishes.map(
            (dish) => {
                return(
                    <RenderMenuItem
                        key= {dish.id}
                        dish = {dish}
                       
                     />
                );
                
                
        });
        return( 

            <div className= "container"> 
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>

                <div className="row">
                    {menu}                    
                </div>                  
            </div>            
        );
}; export default Menu;