import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px;

width: auto;
height: auto;
margin-left: 150px;
margin-top: 50px;
`;

export const ContainerIm = styled.div `

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

width: auto;
height: auto;

`;

export const ImProfile = styled.h1 `

width: 300px;
height: 100px;

font-family: 'Poppins';
font-size: 40px;

color: #EEEEEE;

`;

export const Name = styled.a `
color: #2ecc71;
`;

export const Line = styled.div `

width: 250px;
height: 0px;

border: 5px solid #00ADB5;
border-radius: 5px;
`;

export const DescriptionProfile = styled.h2 `
width: 454px;
height: 72px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;

color: #EEEEEE;

flex: none;
order: 2;
flex-grow: 0;
`;

export const ContainerPhoto = styled.div `
width: 400px;
height: 400px;

`;

export const Photo = styled.img `
width: 400px;
height: 400px;
left: 420.74px;
top: 28.42px;
border-radius: 200px;
backdrop-filter: blur(1.96172px);
`;
