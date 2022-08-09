import React, { useState } from 'react'
import styled from 'styled-components'
import Indicater from './Indicater'

const Quez = () => {
  const [cardnum, setCardnum] = useState(0)
  const [visible, setVisible] = useState(false)
  const [words, setWords] = useState([
    {korean:'의사', meaning:'医者', pronounce:'ウィサ', learning:0, section:1},
    {korean:'위치', meaning:'位置', pronounce:'ウィチ', learning:0, section:1},
    {korean:'사랑', meaning:'愛', pronounce:'サラン', learning:0, section:1}
  ]) 
  var total = words.length
  var tm = 8000;
  var fn = function(){
    setVisible(true)
  };
  var id = setTimeout(fn, tm);
  const num = () => {
    setCardnum(cardnum+1);
    setVisible(false);
    clearTimeout(id);
    console.log(cardnum);
  }
  const show = () => {
    setVisible(true)
  }

  return (
    <div>
      {words.map((word, index) => (
      <Card key={index} cardnum={cardnum} num={index}>
        <Section_num>Section{word.section}{index}</Section_num>
        <Progress_bar><Indicater 
          bar_wrap_color='#FFC3C3' 
          bar_color='#FF7171' 
          percentage={(index+1)*100/(total+1)} 
        /></Progress_bar>
        <Word><p>{word.korean}</p></Word>
        <Card_hidden vis={visible}>
          <P1>{word.meaning}</P1>
          <P2>{word.pronounce}</P2>
        </Card_hidden>
        <Button_wrap>
          <Button onClick={num} color='#87d3ff'>〇</Button>
          <Button color='#ffe100'  >△</Button>
          <Button color='#ff9a8f'>✕</Button>
        </Button_wrap>
        
        <Showanswer onClick={show}><Show>答えを見る</Show></Showanswer>
      </Card>
      ))}
      <Card num={total} cardnum={cardnum}>
        <div class="card-wrap light-theme last-card">
          <h2 class="last-title-k">완료!</h2>
          <p class="last-title">完了！</p>
          <p>今回の正解数</p>
              <div class="this-ar">0/0</div> 
          <p>全体の正解率</p> 
          <div  class="bar-wrap ar bar3-wrap">
              <div id="result-bar" class="ar bar3">0</div>
          </div>  
          <p>進捗</p>
          <div  class="bar-wrap prg bar3-wrap">
              <div id="result-bar2" class="prg bar3">0</div>
          </div>  
          <div class="last-goto light-theme">       
              <a class="lg1" href="#">recordを見る</a>
              <a class="lg1" href="/">home</a>
              <a class="lg2">続ける</a>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Quez

const Card = styled.div`
  position: fixed;
  background-color: white;
   top: 110px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto; 
  z-index: 50;
  box-shadow: 7px 7px rgb(151, 208, 255);
  width: 370px;
  height: 500px;
  text-align: center;
  border: 2px solid black;
  border-radius: 15px;
  display: ${(props) => props.num===props.cardnum ? 'block' : 'none'};
`

const Section_num = styled.div`
  font-size: 20px;
  text-align: start;
  margin-left: 20px;
  margin-top: 5px;
`

const Progress_bar = styled.div`
  width: 90%;
  margin: auto;
`
const Word = styled.div`
  background-color: #FFEAC2;
  display: inline-block;
  border-radius: 20px;
  padding: 0 10px;
  margin-top: 10px;
  font-size: 64px;
  padding: 0 15px;
  margin: 23px;
`

const Card_hidden = styled.div`
  display: ${props => props.vis ? 'block' : 'none'};
`
const P1 = styled.p`
  font-size: 32px;
`

const P2 = styled.p`
  font-size: 13px;
`

const Button_wrap = styled.div`
  width: 100%;
  display: flex;
  height: 130px;
  position: absolute;
  top: 280px;

`

const Button = styled.button`
  width: 33%;
  border: solid 3px ${(props) => props.color};
  border-radius: 24px;
  margin: 0 5px;
  text-align: center;
  font-size: 50px;
  background-color: white;
  cursor: pointer;
  &:hover{background-color: #eeeeee;}
  &:active{border: solid 3px grey}
` 

const Showanswer = styled.div`
  position: absolute;
  top: 425px;
  width: 100%;
`

const Show = styled.button`  
  width: 150px;
  height: 50px;
  border: 2px solid grey;
  border-radius: 15px;
  display: inline-block;
  background-color: #dbf9ff;
  font-size: 20px;
  cursor: pointer;
`
