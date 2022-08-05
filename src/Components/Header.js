import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <header className="light-theme">
            <div className="header-title"><a href="/">TANGO</a></div>
            
            <label className="light-theme">
                {/* <input id="btn-mode" type="checkbox">  */}
                <span className="slider"><span></span></span>
                <div className="darkmode-icon"></div>
            </label>
            <nav className="nav-bar box">
                <li className="nav-link"><a href="/section1/test">section1</a></li>
                <li className="nav-link"><a href="#">acount</a></li>
                <li className="nav-link"><a href="#">progress</a></li>
            </nav>
            <div className="nav-btn-wrap">
                <div className="nav-btn light-theme">
                    <span></span>
                </div>
            </div>
            

        </header>
    </div>
  )
}

export default Header