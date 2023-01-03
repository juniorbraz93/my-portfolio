import React, { useState } from 'react';
import Modal from 'react-modal';
import { ModalContainer, ContainerEmail, Content } from "./styles";

import {  SiGmail } from "react-icons/si";

import Email from '../Email';

Modal.setAppElement('#root');

function ModalEmail() {
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }
    return (
      <ModalContainer>
        <ContainerEmail onClick={openModal}>
              <Content>   
                <SiGmail style={{marginRight: 10}} color="#db4a39" />
                Gmail
              </Content>
        </ContainerEmail>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <Email />
          </Modal>
      </ModalContainer>
    )

}

export default ModalEmail