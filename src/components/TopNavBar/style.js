import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
`;

export const ContainerLogo = styled.div `
/* Frame 985 */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 100px;

width: 901.13px;
height: 100px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

export const ContainerTabNavBar = styled.div `
/* Top Nac Bar */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 0px 0px 4px;
gap: 75px;

position: absolute;
width: 1200px;
height: 100px;
left: 120px;
top: 0px;

`;

export const ImgLogo = styled.img `
/* Logo */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 100px;
height: 100px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

export const ContainerBtn = styled.div `
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 25px;

width: 529px;
height: 86px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

export const AreaBtn = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const BtnTabBar = styled.a `

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-decoration: none;

width: 100px;
height: 100px;


font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;

color: #EEEEEE;

:hover{
    color:  #2ecc71;
    transition: 0.3s all;
}

`;