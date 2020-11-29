import React from 'react';
import './style.scss'
import InfoFormation from '../../InfoFormation';

import { i18n } from '../../../translate/i18n'


function Formation() {
  return (
    <div className="containerThree" id="formation" >
       <InfoFormation titleFormation={i18n.t('titles.titleFormation')}
                      subtitleFormation={i18n.t('titles.subtitleFormation')}
                      dateFormation={i18n.t('messages.dateFormation')}
                      collegeFormation={i18n.t('messages.collegeFormation')}
       />
    </div>
  );
}

export default Formation;
