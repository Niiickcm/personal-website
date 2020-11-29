import React from 'react';
import './style.scss'


function MyProject({imageMyProject,titleMyProject,descriptionMyProject,urlGit}) {
  return (
    <div className="containerMyProject" data-aos="zoom-in-up" >
        <div className="contentMyProject">
            <img src={imageMyProject} alt="ProjectImage"/>
            <h1>{titleMyProject}</h1>
            <p>{descriptionMyProject}</p>
            <a href={urlGit}>GITHUB</a>
        </div>
    </div>
  );
}

export default MyProject;
