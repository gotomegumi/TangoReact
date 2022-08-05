import React from 'react'

function Sectionmenu() {
  return (
    <div>
        <div className="start-menu">
    <div className="start">
        <h2 className="start-hide">←Home</h2>
        <h2 className="section-num">Section</h2>
    </div>
    <div className="start-status-wrap">
        <div className="start-status st1 light-theme">
            <p className="st1-1">進歩</p>
            <div className="bar-wrap prg-bar4-wrap">
                <div className="bar prg-bar4 light-theme"></div>
            </div>
            <p className="st1-2">20%</p>
            <p className="st1-3">KEEP UP!</p>
        </div>
        <div className="start-status st2 light-theme">
            <p className="st2-1">正解率</p>
            <div className="bar-wrap ar-bar4-wrap">
                <div className="bar ar-bar4 light-theme"></div>
            </div>
            <p className="st2-2">30%</p>
            <p className="st2-3">keep up!</p>
        </div>
    </div> 
    <div className="start-btn box light-theme">
        <a href="#">始める</a> 
    </div>
    <div className="mistake-btn box light-theme">
        <a href="#">覚えてない</a> 
    </div>
    <div className="new-btn box light-theme">
        <a href="#">新しい</a> 
    </div>
    <h2 className="start-hide">←Home</h2>

</div>
    </div>
  )
}

export default Sectionmenu