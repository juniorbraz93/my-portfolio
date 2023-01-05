import React, { Component } from 'react';

import { Container, Img } from './styles'

class Projects extends Component {
  render() {
    return (
      <Container>
        <h1>Teste Projetos</h1>
        <Img src="https://raw.githubusercontent.com/juniorbraz93/Minesweeper/main/img/Screenshot_1659305452.png" alt="teste" />
      </Container>
    );
  }
}

export default Projects;