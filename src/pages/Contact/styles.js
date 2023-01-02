import styled from 'styled-components';

export const ProfileConteudo = styled.div `
  margin: 35px 0;
  text-align: center;
  color: var(--cor-terciaria);
`;

export const ProfileImg = styled.div `
    display: block;
    margin: auto;
    width: 200px;
    height: 200px;
    background-image: url('https://github.com/juniorbraz93.png');
    background-size: cover;
    border-radius: 50%;
`;

export const LinksContent = styled.div `
  max-width: 800px;
  margin: auto;
`;

export const Content = styled.a `
  text-decoration: none;
  color: #222831;
  background-color: var(--cor-secundaria);
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.2em;
  padding: 15px;
  position: relative;
  margin: 15px;
  transition: 0.3s ease-in;
`;