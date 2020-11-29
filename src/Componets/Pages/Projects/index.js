import React from 'react';
import MyProject from '../../MyProjects';
import './style.scss'

import { i18n } from '../../../translate/i18n'


function Projects() {
  return (
    <div className="containerFour" id="projects">
          <div className="titleFour">
            <h1>{i18n.t('titles.titleProjects')}</h1>
          </div>
          <div className="contentFour">
            
            <MyProject  imageMyProject="https://images.wallpaperscraft.com/image/code_programming_symbols_140997_1920x1080.jpg"
                        titleMyProject="Ui Clone Netflix"
                        descriptionMyProject={i18n.t('messages.descriptionMyProjectTwo')} 
                        urlGit={"https://github.com/Niiickcm/Clone_Netflix"}
            />
             <MyProject  imageMyProject="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        titleMyProject="Ecoleta NLW"
                        descriptionMyProject={i18n.t('messages.descriptionMyProject')}                     
                        urlGit={"https://github.com/Niiickcm/Site-NLW"}
            />
      
          </div>
    </div>
  );
}

export default Projects;
