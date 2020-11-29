import React from 'react';
import './style.scss'

import ContentSkills from '../../ContentSkills'
import { AiFillFileText } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

import { i18n } from '../../../translate/i18n'

function Skills() {
  
  return (
    <div className="contarinerTwo" >
        <div className="containerTwoCenter" id="Skill">
            <ContentSkills  image={<AiFillFileText size={45}/>}
                            title="Frontend"
                            suTitleOne={i18n.t('header.habilidades')}
                            textSubOne="HTML, CSS, Javascript, ReactJS"
                            suTitleTwo={i18n.t('titles.habilidadesFerramentas')}
                            textSubTwoOne="SASS"
                            textSubTwoTwo="MaterializeCSS"
                            textSubTwoThree="Material UI"
                            textSubTwoFour="styled-componets"
                            textSubTwoFive="styled-icons"
                            textSubTwoSix="react-icons"
                            textSubTwoSeven="Github"
                            textSubTwoEight="Git"
                            textSubTwoNine="Typescript"
                            
            />
            <ContentSkills  image={<FiSettings size={45}/>}
                            title="Backend"
                            suTitleOne={i18n.t('header.habilidades')}
                            textSubOne="NodeJS, MVC, Express, Javascript"
                            suTitleTwo={i18n.t('titles.habilidadesFerramentas')}
                            textSubTwoOne="SASS"
                            textSubTwoTwo="API"
                            textSubTwoThree="Typescript"
                            textSubTwoFour="Github"
                            textSubTwoFive="Git"
                            textSubTwoSix="MongoDB"
                            textSubTwoSeven="MySQL"
                            textSubTwoEight="NoSQL  "
                            textSubTwoNine="Email Template"
            />

        </div>
    </div>
  );
}

export default Skills;
