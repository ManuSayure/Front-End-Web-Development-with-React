import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background-color:white ;
  min-height: 20vh;
  padding: 20px 15vw;
`; 
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.text}
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px ${({theme})=> theme.sombra};
  padding: 20px;
  width: 100%;
  background:#f98fa7;
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