import React from 'react'
import { useNavigate } from 'react-router-dom'
import Indicater from '../Indicater'
import styled from 'styled-components'

const Section = ({ status }) => {
    const move = (section) => {
        navigate('/menu/'+section)
    }
    const navigate = useNavigate()

  return (
    <div>
        <Section_wrap key={ status.section } onClick={() => navigate('/menu/'+status.section)}>
            <div to={'/menu'}>
                <div >Section{ status.section } : 特に分類なし</div>
                <Section_bars>
                    <p>進捗</p>
                    <p>{ status.progress }%</p>
                    <I_wrap>
                        <Indicater height='8px' bar_color='blue' percentage={status.progress}/>
                    </I_wrap>
                    <p>暗記</p>
                    <p>{ status.answerrate }%</p>
                    <I_wrap>
                        <Indicater height='8px' bar_color='green' percentage={status.answerrate}/>
                    </I_wrap>
                </Section_bars>
            </div>
            
        </Section_wrap>
     
    </div>
  )
}

const Section_wrap = styled.li`
width: 100%;
border: solid 2px black;
border-radius: 5px;
margin-bottom: 30px;
box-shadow: rgb(255, 216, 109) 6px 6px, black 6px 6px 0 2px;
border-radius: 15px;
padding: 10px;
cursor: pointer;
`

const Section_bars = styled.div`
display: flex;
`

const I_wrap = styled.div`
width: 25%;
padding-top: 7px;
margin: 0 5px;
`

export default Section