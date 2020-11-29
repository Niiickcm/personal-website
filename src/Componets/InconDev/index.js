import React from 'react';
import './style.scss'
import ArrowRight from '../../img/arrowright.png'
import ArrowLeft from '../../img/arrowleft.png'

function IconDev() {
  return (
    <div className="container-icons">
        <div className="content-icons">
            <img src={ArrowLeft} className="arrow-left" data-aos="fade-right" data-aos-delay="1900" alt="arrowLeft"/>
            <img src={ArrowRight} data-aos="fade-left" data-aos-delay="1900" alt="arrowRight"/>
        </div>
    </div>
  );
}

export default IconDev;
