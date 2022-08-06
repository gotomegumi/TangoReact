import React from 'react'

const Statusbox = ({ section, bar_color, percentage }) => {
  return (
    <li className="status box light-theme" id="status2" value=''>
        <p className="st-text1">正解率</p>
        <p className="st-text2">Section{section}</p>
        <div className="bar-wrap bar1-ar-wrap light-theme">
            <div className="bar bar1-ar light-theme" style={{ backgroundcolor: bar_color }}></div>
        </div>
        <p className="st-text3">{percentage}%</p>
        <p className="st-text4 light-theme">スタート!</p>
    </li> 
  )
}

export default Statusbox