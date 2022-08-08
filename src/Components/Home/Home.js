import { useState } from 'react'
import { Link } from 'react-router-dom'
import Homestatus from './Homestatus'
import Homesection from './Section'
import './Home.css'


function Home({ mostrecent, status }) {

  return (
    <div>
        <Homestatus mostrecent={mostrecent}/>
        {status.map((status, index) => (
            <Homesection status={status} index={index} key={index}/>
        ))}
        <Link to='/menu'>menu</Link>
    </div>
  )
}

export default Home