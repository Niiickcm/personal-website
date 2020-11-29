import React from 'react';
import './style.scss';
import { i18n } from '../../translate/i18n'

function Title() {
  return (
    <>
      <div className="title-container">
          <div className="title-content">
            <h1 data-aos="fade-left">{i18n.t('titles.devTitle')}</h1>
            <h2 data-aos="fade-right" data-aos-delay="1000">{i18n.t('titles.devSubTitle')}</h2>
          </div>
      </div>
    </>
  );
}

export default Title;
