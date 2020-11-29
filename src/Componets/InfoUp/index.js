import React from 'react';
import './style.scss'
import ArrowDonw from '../../img/arrowleft.png'

function InfoUp({invisible}) {
  
  
  return (
    <div className="content-infoup">
        <a href="#initial" >
          <div className={invisible ? 'invisible' : 'infoup'}>
              <img src={ArrowDonw} alt="arrowDown"/>
          </div>
        </a>
    </div>
  );
}

export default InfoUp;
