import React from 'react'
import { Link } from 'react-router-dom'

const Homesection = ({ status }) => {
  return (
    <div>
        <li className="section box light-theme {{ progress.section }}" value="{{ progress.section }}">
            <Link to={'/menu'}>Section{ status.section } : 特に分類なし</Link>
            <div className="section-bars">
                <p>進捗</p>
                <p className="prg-percent">{ status.progress }%</p>
                <div className="bar-wrap bar-se1-wrap light-theme">
                    <div className="bar bar-se1 light-theme"></div>
                </div>
                <p>暗記</p>
                <p className="ar-percent">{ status.answerrate }%</p>
                <div className="bar-wrap bar-se2-wrap light-theme">
                    <div className="bar bar-se2 light-theme"></div>
                </div>
            </div>
        </li>
     
    </div>
  )
}

export default Homesection