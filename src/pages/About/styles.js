import styled from 'styled-components';


export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  width: auto;
  height: auto;
  margin-left: 150px;
  margin-top: 110px;
`;

export const ContainerAbout = styled.div `
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerPhoto = styled.div `
  width: 400px;
  height: 400px;
`;

export const ImgProfile = styled.img`
  width: 400px;
  height: 400px;
  left: 420.74px;
  top: 28.42px;
  border-radius: 200px;
  backdrop-filter: blur(1.96172px);
`;

export const TextAbout = styled.a `
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  padding: 15px;
  position: relative;
  margin: 15px;
`;
