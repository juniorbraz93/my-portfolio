import React, { Component } from 'react';


import {
  Container,
  ContainerIm,
  ImProfile,
  Name,
  Line,
  DescriptionProfile,
  ContainerPhoto,
  Photo,
} from './styles';

import photo from "../../assets/img/eu.png";


class Home extends Component {
 render() {
  return (
    <>
      <Container>
        <ContainerIm>
          <ImProfile>Ola, meu nome é<br /><Name>Junior Braz</Name></ImProfile>
          <Line />
          <DescriptionProfile>Dev FullStack</DescriptionProfile>
        </ContainerIm>
        <ContainerPhoto>
          <Photo src={photo} />
        </ContainerPhoto>
      </Container>
    </>
   
 );
 }
}

export default Home;