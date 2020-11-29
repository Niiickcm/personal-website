import React, { useState, useEffect } from 'react';
import './style.scss';

import Header from '../../Header';
import Title from '../../Title';
import InconDev from '../../InconDev';
import InfoDown from '../../InfoDown';
import InfoUp from '../../InfoUp';

import Video from '../../../Video/backgroundvideo.mp4';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Start() {

    const [visible, setVisible] = useState(true);
    const [visibleDown, setVisibleDown] = useState(true)

useEffect(() =>{
    AOS.init({ duration: 2000 });
}, []);
        


useEffect(()=>{
    const scrollListener = () =>{
        if(500 >= window.scrollY){
          setVisible(true);
          
        }else{
          setVisible(false);
        }
    }
            document.addEventListener('scroll', scrollListener)
        return () =>{
            document.removeEventListener('scroll', scrollListener)
        }
        

}, [])


useEffect(()=>{
    const scrollListenerDown = () =>{
        if(window.scrollY >= 100){
            setVisibleDown(false);
          
        }else{
            setVisibleDown(true);
        }
    }
            document.addEventListener('scroll', scrollListenerDown)
        return () =>{
            document.removeEventListener('scroll', scrollListenerDown)
        }
        
}, [])




  return (
    <>
        <div className="container" id="initial">
            <div className="content--shadow--top">
                <div className="content--shadow--bottom">
                    <video autoPlay loop muted>
                        <source src={Video} type="video/mp4"/>
                    </video>
                    <Header/>
                        <div className="center">
                        <Title/>
                        <InconDev/>
                        <InfoDown invisibleDonw={visibleDown}/>
                        <InfoUp invisible={visible}/>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  );
}

export default Start;
