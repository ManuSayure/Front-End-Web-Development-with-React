import React from 'react';

export const Error = ({errMess}) => {
    console.log(errMess);
    return(
        <div className="col-12 align-content-between">
            <span className="fa fa-exclamation-triangle  fa-3x fa-fw text-denger">  </span>
            <p> {errMess} </p> 
           
        </div>
    );
};