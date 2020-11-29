import React from 'react';
import './style.scss'

import Footer from '../../Footer'

import { i18n } from '../../../translate/i18n'

function About() {
  return (
    <div className="containerFive" id="about" >
        <div className="contentFive" data-aos="fade-up">
          <div className="contentFiveTwo">
            <div className="cotentPhoto">
              <div className="cotentPhotoTwo">
              </div>
            </div>
            <div className="contentAbout">
                  <h1 data-aos="fade-right" data-aos-delay="1000">{i18n.t('titles.titleSobre')}</h1>
                  <p   data-aos="zoom-in-up" data-aos-delay="1500">{i18n.t('messages.descriptionSobreOne')}
                  <strong>{i18n.t('messages.descriptionName')}
                  </strong> {i18n.t('messages.descriptionSobreTwo')}
                  <strong>{i18n.t('messages.descriptionCollege')}
                  </strong>{i18n.t('messages.descriptionSobreThree')} 
                  </p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default About;
