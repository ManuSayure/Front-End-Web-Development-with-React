import React from 'react';
import {Loading} from './Loading';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import {baseURL} from 'baseURL';

const RenderCard = ({item, isLoading, errMess}) => {
  
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
         else{ 
            return( 
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardImg src={baseUrl + item.image}/>
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                                <CardText className="text-justify">{item.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
    
};
const Home = (props) =>{
    console.log(props);
    const RenderListCards = () => {
        return(
            <div className="row align-items-start">
                <RenderCard key= {1}  item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                <RenderCard key ={2} item= {props.promotion}  />
                <RenderCard key = {3} item= {props.leader}/>
        </div> 
        );       
                 
    };
    return(
        <div  className='container'>
            <div className="col-12 col-md m-1">
               <RenderListCards/>                
            </div>
        </div>

    );
}; export default Home;