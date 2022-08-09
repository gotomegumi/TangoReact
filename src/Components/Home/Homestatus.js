import React from 'react'
import { Link } from 'react-router-dom'
import Statusbox from '../Statusbox'
import styled from 'styled-components'

const Homestatus = ({mostrecent}) => {
    const u = 24
  return (
    <div>
        <div className="status-wrap light-theme"> 
            <h2>Status</h2>
            <ul className="status-box-wrap">
                <S>
                    <Statusbox 
                        section={mostrecent.section}
                        text='進捗'
                        bar_color='#1b91ff'
                        percentage={mostrecent.progress}
                        emp='2'
                    />
                </S>
                <S>
                    <Statusbox 
                        text='正解率'
                        section={mostrecent.section}
                        bar_color='#70ba08'
                        percentage={mostrecent.answerrate}
                        emp='2'
                    />
                </S>
                <li className="status box light-theme"></li>
            </ul>
            <div className="section-title1">
                <h2>Section</h2>
            </div>    
        </div>

    </div>
  )
}

const S = styled.div`
    width: 180px;
    margin-right: 20px;
    margin-bottom: 13px;
    border-radius: 15px;
    &:hover{
        background-color: #EEEEEE;
    }
`

export default Homestatus