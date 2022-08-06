import React from 'react'
import { Link } from 'react-router-dom'
import Statusbox from '../Statusbox'

const Homestatus = ({status}) => {
    const u = 24
  return (
    <div>
        <div className="status-wrap light-theme"> 
            <h2>Status</h2>
            <ul className="status-box-wrap">
                <Statusbox 
                    section={status[1].section}
                    text='進捗'
                    bar_color='blue'
                    percentage={status[1].progress}
                    emp='2'
                />
                <Statusbox 
                    text='正解率'
                    section={status[1].section}
                    bar_color='green'
                    percentage={status[1].answerrate}
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