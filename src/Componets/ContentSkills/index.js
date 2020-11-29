import React from 'react';
import './style.scss'


function ContentSkills({image,
                        title,
                        suTitleOne,
                        suTitleTwo,
                        textSubOne,
                        textSubTwoOne,
                        textSubTwoTwo,
                        textSubTwoThree,
                        textSubTwoFour,
                        textSubTwoFive,
                        textSubTwoSix,
                        textSubTwoSeven,
                        textSubTwoEight,
                        textSubTwoNine,
                        textSubTwoTen,
                        textSubTwoTwelve}) {

  return (
    <div className="container-skills" data-aos="zoom-in-up">
         <div className="content-skills">
            <div className="icon-title">
                <div className="iconTitle">{image}</div>
                <h1   className="title">{title}</h1>
            </div>
            <h2   className="subTitle">{suTitleOne}</h2>
            <span className="textSub">{textSubOne}</span>
            <h2   className="subTitle">{suTitleTwo}</h2>
            <li   className="textSub">{textSubTwoOne}</li>
            <li   className="textSub">{textSubTwoTwo}</li>
            <li   className="textSub">{textSubTwoThree}</li>
            <li   className="textSub">{textSubTwoFour}</li>
            <li   className="textSub">{textSubTwoFive}</li>
            <li   className="textSub">{textSubTwoSix}</li>
            <li   className="textSub">{textSubTwoSeven}</li>
            <li   className="textSub">{textSubTwoEight}</li>
            <li   className="textSub">{textSubTwoNine}</li>
            <li   className="textSub">{textSubTwoTen}</li>
            <li   className="textSub">{textSubTwoTwelve}</li>

        </div>

    </div>
  );
}

export default ContentSkills;
