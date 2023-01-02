import React from 'react';

import { skillItem } from '../../assets/skill'

import {
  Skills, ItemSkill,
} from './styles';


export default function Skill() {
  const ItensSkill = skillItem;
 return (
   <>
    <h1>Hard Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3> 
                  </div>
                </ItemSkill>
              )}
            </Skills>
   </>
 );
}