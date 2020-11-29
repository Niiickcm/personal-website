import React from 'react';
import './style.scss'
import ArrowDown from '../../img/arrowleft.png'

function InfoDown({invisibleDonw}) {
  return (
    <div className="content-infodown">
        <div className={invisibleDonw ? 'infdown' : 'invisible'}>
            <img src={ArrowDown} alt="ArrowDown"/>
        </div>
    </div>
  );
}

export default InfoDown;
