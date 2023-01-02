import React, { Component } from 'react';

import { ProfileConteudo, ProfileImg } from './styles';

import Social from '../../components/Social'

class Contact extends Component {
  render() {   
    return (
      <>
        <ProfileConteudo>
            <ProfileImg />
            <h3>Junior Braz</h3>
            <p>Bem Vindo</p>
        </ProfileConteudo>
        <Social />
      </>
    );
  }
}

export default Contact;
