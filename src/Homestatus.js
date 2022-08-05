import React from 'react'
import { Link } from 'react-router-dom'

const Homestatus = ({status}) => {
  return (
    <div>
        <div className="status-wrap light-theme"> 
            <h2>Status</h2>
            <ul className="status-box-wrap">
                <li className="status box light-theme" id="status1" value="{{ section }}">
                    <p className="st-text1">進歩</p>
                    {/* <p className="st-text-sec">Section{{ section }}</p> */}
                    <p className="st-text2">Section{status[1].section}</p>
                    <div className="bar-wrap bar1-prg-wrap light-theme">
                        <div className="bar bar1-prg light-theme"></div>
                    </div>
                    {/* <p className="st-text3">{{ progress }}%</p> */}
                    <p className="st-text3">{status[1].progress}%</p>
                    <p className="st-text4 light-theme">スタート!</p>
                    <Link
                        to={'/menu'}
                    >
                        menu
                    </Link>
                </li>
                <li className="status box light-theme" id="status2" value=''>
                    <p className="st-text1">正解率</p>
                    <p className="st-text2">Section{status.section}</p>
                    <div className="bar-wrap bar1-ar-wrap light-theme">
                        <div className="bar bar1-ar light-theme"></div>
                    </div>
                    <p className="st-text3">{status.answerrate}%</p>
                    <p className="st-text4 light-theme">スタート!</p>
                </li>
                <li className="status box light-theme"></li>
            </ul>
            <div className="section-title1">
                <h2>Section</h2>
            </div>    
        </div>

    </div>
  )
}

export default Homestatus