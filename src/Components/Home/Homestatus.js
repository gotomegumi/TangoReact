import React from 'react'
import { Link } from 'react-router-dom'
import Statusbox from '../Statusbox'

const Homestatus = ({mostrecent}) => {
    const u = 24
  return (
    <div>
        <div className="status-wrap light-theme"> 
            <h2>Status</h2>
            <ul className="status-box-wrap">
                <Statusbox 
                    section={mostrecent.section}
                    text='進捗'
                    bar_color='#1b91ff'
                    percentage={mostrecent.progress}
                    emp='2'
                />
                <Statusbox 
                    text='正解率'
                    section={mostrecent.section}
                    bar_color='#70ba08'
                    percentage={mostrecent.answerrate}
                    emp='2'
                />
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