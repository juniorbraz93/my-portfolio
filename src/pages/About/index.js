/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Container, ContainerAbout, ContainerPhoto, ImgProfile, TextAbout } from './styles'
import photo from "../../assets/img/eu.png";

import Skill from '../../components/Skill'

class About extends Component {
  render()  {
    return (
      <Container>
        <ContainerAbout>
          <ContainerPhoto>
            <ImgProfile src={photo}/>
          </ContainerPhoto>
          <TextAbout>
            eu atuo na área de TI, obtive experiência como suporte na área de infraestrutura, e atualmente atuo com desenvolvimento Back-end,
            Front-end, Mobile utilizando JavaScript, HTML, CSS, GIT, GraphQL ou API REST em tecnologias como NodeJS, ReactJS, React Native.
          </TextAbout>
        </ContainerAbout>
        
        <Skill />

      </Container>
    );
  }
}

export default About;