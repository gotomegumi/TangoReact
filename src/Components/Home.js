import { useState } from 'react'
import { Link } from 'react-router-dom'
import Homestatus from '../Homestatus'
import Homesection from './Homesection'


function Home() {
    const [status, setState] = useState([
        {section:1, progress:45, answerrate:40},
        {section:2, progress:45, answerrate:40},
        {section:3, progress:45, answerrate:40},
    ])


  return (
    <div>
        <Homestatus status={status}/>
        {status.map((status) => (
            <Homesection status={status} />
        ))}
    </div>
  )
}

export default Home