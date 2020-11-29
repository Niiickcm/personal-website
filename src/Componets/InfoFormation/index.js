import React from 'react';
import './style.scss'

import { MdSchool } from 'react-icons/md'

function InfoFormation({titleFormation,subtitleFormation,dateFormation,collegeFormation}) {
  return (
    <div className="container-infoInformation" data-aos="fade-right" data-aos-delay="200">
      <div className="content-infoInformation">
          <div className="iconFormation">
            <MdSchool size={50} data-aos="zoom-in" data-aos-delay="1500"/>
          </div>
          <h1 data-aos="fade-down"  data-aos-delay="1000">{titleFormation}</h1>
          <h2 data-aos="fade-up" data-aos-delay="200">{subtitleFormation}</h2>
          <p data-aos="fade-up" data-aos-delay="400">{dateFormation}</p>
          <strong data-aos="fade-up" data-aos-delay="600">{collegeFormation}</strong>
      </div>
    </div>
  );
}

export default InfoFormation;
