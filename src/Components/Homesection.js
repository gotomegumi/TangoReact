import React from 'react'

const Homesection = ({ status }) => {
  return (
    <div>
        <li class="section box light-theme {{ progress.section }}" value="{{ progress.section }}">
            <p>Section{ status.section } : 特に分類なし</p>
            <div class="section-bars">
                <p>進捗</p>
                <p class="prg-percent">{ status.progress }%</p>
                <div class="bar-wrap bar-se1-wrap light-theme">
                    <div class="bar bar-se1 light-theme"></div>
                </div>
                <p>暗記</p>
                <p class="ar-percent">{ status.answerrate }%</p>
                <div class="bar-wrap bar-se2-wrap light-theme">
                    <div class="bar bar-se2 light-theme"></div>
                </div>
            </div>
        </li>
     
    </div>
  )
}

export default Homesection