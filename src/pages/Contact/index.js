import React, { Component } from 'react';

import { ProfileConteudo, ProfileImg, LinksContent, Content } from './styles';

import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiGmail,
  // SiYoutube

 } from "react-icons/si";

class Contact extends Component {
  render() {
    const listMediaSocial = [
      { id: 1, icon: <SiLinkedin style={{marginRight: 10}} color="#0e76a8" />, nameUrl: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-braz-junior/'},
      { id: 2, icon: <SiGithub style={{marginRight: 10}} color="#171515" />, nameUrl: 'GitHub', url: 'https://github.com/juniorbraz93'},
      { id: 4, icon: <SiGmail style={{marginRight: 10}} color="#db4a39" />, nameUrl: 'Gmail', url: 'https://wa.me/5527999040472'},
      { id: 5, icon: <SiWhatsapp style={{marginRight: 10}} color="#25D366" />, nameUrl: 'Whatsapp', url: 'https://wa.me/5527999040472'},
      // { id: 6, icon: <SiYoutube style={{marginRight: 10}} color="#FF0000" />, nameUrl: 'Youtube', url: 'https://www.youtube.com/channel/UCHEFiaSgYcR6BFrtjSqV5qA'},
    ]
  const linksSocialMedia = listMediaSocial.map((index) =>
  <LinksContent key={index.id} >
    
    <Content href={index.url}>
      {index.icon}
      {index.nameUrl}
    </Content>
  </LinksContent>
)
return (
<>
   <ProfileConteudo>
      <ProfileImg />
       <h3>Junior Braz</h3>
       <p>Bem Vindo</p>
  </ProfileConteudo>
  <div>
      {linksSocialMedia}
  </div>
</>
);
  }
}

export default Contact;
