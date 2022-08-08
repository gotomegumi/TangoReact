import React from 'react'
import { useNavigate } from 'react-router-dom'
import Indicater from '../Indicater'
import styled from 'styled-components'

const Section = ({ status, index }) => {
    const move = (section) => {
        navigate('/menu/'+section)
    }
    const navigate = useNavigate()
    const sec_color = 
    
    {
        sec0:'rgb(52, 218, 255)',
        sec1:'rgb(255, 225, 105)'}
        // --sec2:rgb(255, 135, 135);
        // --sec3:rgb(236, 255, 254);
        // --sec4:rgb(156, 255, 151);
        // --sec5:rgb(120, 255, 221);
        // --sec6:rgb(120, 239, 255);
        // --sec7:rgb(120, 170, 255);
        // --sec8:rgb(208, 120, 255);
        // --sec9:rgb(255, 152, 241);
        // --sec10:rgb(255, 104, 104);
        // --sec11:rgb(255, 148, 103);
        // --sec12:rgb(255, 236, 94);
        // --sec13:rgb(139, 255, 135);
        // --sec14:rgb(155, 255, 222);
        // --sec15:rgb(107, 245, 255);
        // --sec16:rgb(67, 136, 255);
        // --sec17:rgb(123, 86, 255);
    
    console.log(sec_color[`${index}`])
    let this_color = sec_color[{index}]

  return (
    <Section_wrap 
        onClick={() => navigate('/menu/'+status.section)}
        color={this_color}
    >
        <div to={'/menu'}>
        <div>Section{ status.section } : 特に分類なし </div>
            <Section_bars>
                <p>進捗</p>
                <p>{ status.progress }%</p>
                <I_wrap>
                    <Indicater height='8px' bar_color='#1b91ff' percentage={status.progress}/>
                </I_wrap>
                <p>暗記</p>
                <p>{ status.answerrate }%</p>
                <I_wrap>
                    <Indicater height='8px' bar_color='#70ba08' percentage={status.answerrate}/>
                </I_wrap>
            </Section_bars>
        </div>
        
    </Section_wrap>
  )
}

const Section_wrap = styled.li`
width: 100%;
border: solid 2px black;
border-radius: 5px;
margin-bottom: 30px;
box-shadow: ${props => props.color ? props.color :'rgb(255, 216, 109)'}  6px 6px, black 6px 6px 0 2px;
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