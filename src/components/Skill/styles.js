import styled from 'styled-components';
import { motion } from "framer-motion"

export const Skills = styled.div`
  flex-direction: column;
  display:flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 10px;
  border-radius: 0 0 15px 14px;
  max-height: 48.5vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

`;

export const ItemSkill = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 5px;
  margin:0 2% 2% 0;
  height: 15vh;

  div{
    width: 100%;
    h3{
      margin-bottom: 2%;
      color: #fff;
      font-size: 1em;
    }

    /* & span{
      font-size: 0.8em;
      line-height: 0;
    } */
  }

  svg{
    margin: 5%;
  }

  /* @media(max-width: 714px){
    flex: 1 1 50%;
  } */
`;
