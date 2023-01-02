import React from 'react';
import { Link } from 'react-router-dom'
// import {
//   DiHtml5,
//   DiCss3,
//   DiReact,
//   DiGit,
//  } from "react-icons/di";
//  import { FaUserNinja } from "react-icons/fa";

import { Container, ContainerLogo, ContainerTabNavBar, ImgLogo, ContainerBtn, AreaBtn, BtnTabBar } from './style'
import logo from "../../assets/img/logo-sf.png"

export default function TopNavBar() {
 return (
    <Container>
      <ContainerTabNavBar>
        <ContainerLogo>
            <ImgLogo src={logo}/>
          
            <ContainerBtn>
              <AreaBtn>
                <Link to="/" style={{textDecoration: "none"}}>
                  <BtnTabBar>Home</BtnTabBar>
                </Link>
              </AreaBtn>
              <AreaBtn>
                <Link to="/about" style={{textDecoration: "none"}}>
                  <BtnTabBar>Sobre</BtnTabBar>
                </Link>
              </AreaBtn>
              <AreaBtn>
                <Link to="/projects" style={{textDecoration: "none"}}>
                  <BtnTabBar>Projetos</BtnTabBar>
                </Link>
              </AreaBtn>
              <AreaBtn>
                <Link to="/contact" style={{textDecoration: "none"}}>
                  <BtnTabBar>Contato</BtnTabBar>
                </Link> 
              </AreaBtn>
            </ContainerBtn>
        </ContainerLogo>
      </ContainerTabNavBar>
    </Container>
 );
}