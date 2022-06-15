import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Montserrat Alternates', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 200%;
display: flex;
align-items: center;
text-align: center;
color: rgba(104,76,65, 1);
background-color: rgba(127,89,176, 0.8);
flex-direction: row;
justify-content: center;
gap: 10px;
width: 273px;
height: 48px;
left: 926px;
top: 1722px;
border: 1px solid rgba(104,76,65, 1);
border-radius: 4px;
&:hover {
  background-color: rgba(104,76,65, 0.8);
  color: rgba(127,89,176, 1);
  border: 1px solid rgba(127,89,176, 1);}
`;


export const Title = styled.h1`
 font-size: 3rem;
 font-family: 'Cinzel', serif;
 font-weight: 500;
 color: rgba(253,174,56, 1);
`;

export const Text = styled.h2`
font-family: 'Montserrat Alternates', sans-serif;
font-weight: Light 300;
font-size: 1.2rem;
color: rgba(247,84,53, 0.5);
`;

export const Li = styled.li`
font-family: 'Montserrat Alternates', sans-serif;
font-weight: Light 300;
font-size: 1rem;
color: rgba(253,174,56, 1);
text-decoration: none;
list-style-type: none;
`;

export const Label = styled.label`
font-family: 'Montserrat Alternates', sans-serif;
font-weight: Light 400;
font-size: 1.5rem;
color: rgba(253,174,56, 1);
`;



// #684C41   #7F59B0  #FDAE38 #F75435