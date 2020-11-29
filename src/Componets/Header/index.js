import React, { useState } from 'react';
import './style.scss'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { i18n } from '../../translate/i18n'

function Header() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  const I18N_STORAGE_KEY = 'i18nextLng'

  const hadleClickLanguage = event => {
      localStorage.setItem(I18N_STORAGE_KEY,event.target.value)
      window.location.reload()
  }

  return (
    <IconContext.Provider value={{ color:' #28df99'}}>
    <header>
      <nav>
        <ul className={click ? 'active' : '' } onClick={handleClick}>
            <li><a href="#Skill" >{i18n.t('header.habilidades')}</a></li>
            <li><a href="#formation">{i18n.t('header.formacao')}</a></li>
            <li><a href="#projects">{i18n.t('header.projetos')}</a></li>
            <li><a href="#about">{i18n.t('header.sobre')}</a></li>
            <div className="menuButton" onClick={handleClick}>
              {click ? <FaTimes className="icon"/> : <FaBars className="icon"/>}
            </div>
        </ul>
      </nav>
        <div className="button-group">
              <button onClick={hadleClickLanguage} value="en-US">EN</button>
              <button onClick={hadleClickLanguage} value="pt-BR">PT</button>
        </div>
    </header>
    </IconContext.Provider>
  );
}

export default Header;
