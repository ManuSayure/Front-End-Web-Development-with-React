import React from 'react';
import styled from 'styled-components';
 
// ${({theme}) => theme.text}
//${({theme})=> theme.sombra}

const ContainerDiv = styled.div`
  background-color:white ;
  min-height: 20vh;
  padding: 20px 15vw;
`; 
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 0px red;
  padding: 20px;
  width: 100%;
  background:#fff;
  @media( max-width: 800px ){
    
    flex-direction: column;
    
  }
`;
const Texto = styled.p`
font-weight: bold;
font-size: 17px;
`

export const Error = ({errMess}) => {
    console.log(errMess);
    return(
        <ContainerDiv>
            <Conteudo>
            <span className="fa fa-exclamation-triangle  fa-3x fa-fw text-denger">  </span>
            <Texto> {errMess} </Texto>            
          </Conteudo>
        </ContainerDiv>
        
    );
};