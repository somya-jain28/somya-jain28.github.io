import React from 'react'
import './Header.css'
import Logo from '../../assets/MyntraLogo.jpeg'

function Header() {
  return (
    <header className='desktop-container' id='desktop-header-cnt'>
      <div className='desktop-preHeaderContent desktop-showBanner'></div>
      <div className='desktop-bound'>
        <div className='desktop-logoContainer'>
          <img src={Logo} className='myntraweb-sprite desktop-logo sprites-headerLogo'/>
        </div>

        <nav className='desktop-navbar'>
          <div className='desktop-navLinks'>
            <div className='desktop-navContent'>
              <div className='desktop-navLink'>
                <a href="/shop/men" style={{borderBottomColor:'#ee5f73'}} className="desktop-main">Men</a>
              </div>
            </div>
            <div className='desktop-navContent'>
              <a href="/shop/men" style={{borderBottomColor:'#ee5f73'}} className="desktop-main">Women</a>
            </div>
            <div className='desktop-navContent'>
              <a href="/shop/men" style={{borderBottomColor:'#ee5f73'}} className="desktop-main" >Kids</a>
            </div>
            <div className='desktop-navContent'>
              <a href="/shop/men" style={{borderBottomColor:'#ee5f73'}} className="desktop-main">Home and Living</a>
            </div>
            <div className='desktop-navContent'>
              <a href="/shop/men" style={{borderBottomColor:'#ee5f73'}} className="desktop-main">Beauty</a>
            </div>
          </div>
        </nav>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}

export default Header

