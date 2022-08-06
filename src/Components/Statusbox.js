import React from 'react'
import styled from 'styled-components'

const Statusbox = ({ text, section, bar_color, percentage, emp }) => {


  return (

    <Status id="status2" value=''>
        <p>{text}</p>
        {section>0 && (<Text2 emp={emp}>Section{section}</Text2>)}
        <Bar_wrap>
            <Bar percentage={percentage} color={bar_color}></Bar>
        </Bar_wrap>
        <Text3 emp={emp}>{percentage}%</Text3>
        <p>スタート!</p>
    </Status> 
  )
}

const Status = styled.div`
  width: 180px;
  height: 180px;
  border-radius:  15px;
  margin-right: 20px;
  margin-bottom: 13px;
  padding: 17px 10px 10px;
  display: inline-block;
  flex-shrink: 0;
  border: 2px solid black;
  box-shadow: rgb(255, 178, 89) 2px 3px;
  font-size: large;
  cursor: pointer;
  font-size: 20px;
`

const Text2 = styled.p`
  font-size: ${props => props.emp==='2' ? '24px' : '20px'};
`

const Text3 = styled.p`
  font-size: ${(props) => props.emp==='3' ? '40px' : '20px'};
`

const Bar_wrap = styled.div`
  leight: 20px;
  background-color: #EEEEEE;
  border-radius: 10px;
`

const Bar = styled.div`
  width: ${(props) => props.percentage+'%'};
  background-color: ${(props) => props.color};
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`

export default Statusbox