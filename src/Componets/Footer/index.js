import React from 'react';
import './style.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


function Footer() {

  return (
    <div className="container-footer">
        <div className="border">
            <div className="content-footer">
                <a href="https://www.linkedin.com/in/thiago-miguel-7377aa172/"><AiFillLinkedin size={35} color="#121214" /></a>
                <a href="https://github.com/Niiickcm"><AiFillGithub size={35} color="#121214"/></a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
