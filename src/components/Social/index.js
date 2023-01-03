/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";

import { LinksContent, Content } from './styles';

import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  // SiYoutube
 } from "react-icons/si";
import ModalEmail from "../ModalEmail";

class Social extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() { 
    const listMediaSocial = [
      { id: 1, icon: <SiLinkedin style={{marginRight: 10}} color="#0e76a8" />, nameUrl: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-braz-junior/'},
      { id: 2, icon: <SiGithub style={{marginRight: 10}} color="#171515" />, nameUrl: 'GitHub', url: 'https://github.com/juniorbraz93'},
      { id: 5, icon: <SiWhatsapp style={{marginRight: 10}} color="#25D366" />, nameUrl: 'Whatsapp', url: 'https://wa.me/5527999040472'},
      // { id: 6, icon: <SiYoutube style={{marginRight: 10}} color="#FF0000" />, nameUrl: 'Youtube', url: 'https://www.youtube.com/channel/UCHEFiaSgYcR6BFrtjSqV5qA'},
    ]
    const linksSocialMedia = listMediaSocial.map((index) =>
      <LinksContent key={index.id} >
        <Content onclick={index.url}>
          {index.icon}
          {index.nameUrl}
        </Content>
      </LinksContent>
    )
    return (
      <>
        {linksSocialMedia}
        <ModalEmail />
      </>
    )
  }
}

export default Social;