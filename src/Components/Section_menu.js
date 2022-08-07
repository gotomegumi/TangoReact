import React from 'react'
import {Link} from 'react-router-dom'
import './Section_menu.css'
import Statusbox from './Statusbox'

function Sectionmenu({ mostrecent }) {
  return (
    <div>
        <div className="start">
            <Link className="start-hide" to={'/'}>←Home</Link>
            <h2 className="section-num">Section</h2>
        </div>
        <div>
            <Statusbox
            text='進捗'
            percentage={mostrecent.progress}
            bar_color='blue'
            emp='3'
            />
            <Statusbox
                text='定着度'
                percentage={mostrecent.answerrate}
                bar_color='green'
                emp='3'
            />
        </div>
            

        <div className="start-btn box light-theme">
            <Link to={'/quez'}>始める</Link> 
        </div>
        <div className="mistake-btn box light-theme">
            <a href="#">覚えてない</a> 
        </div>
        <div className="new-btn box light-theme">
            <a href="#">新しい</a> 
        </div>
    </div>
  )
}

export default Sectionmenu