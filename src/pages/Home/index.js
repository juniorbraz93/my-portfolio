import React from 'react';


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

import photo from "../../img/eu.png";


export default function Home() {
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
