import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Quez from './Components/Quez';
import Sectionmenu from './Components/Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [status, setState] = useState([
    {section:1, progress:45, answerrate:40},
    {section:2, progress:10, answerrate:3},
    {section:3, progress:90, answerrate:20},
  ])
  const [mostrecent, setRecent] = useState({
    section:3,
    progress:30,
    answerrate:40
  })

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home mostrecent={mostrecent} status={status} />} />
          <Route path='menu'>
            <Route path=':sectionNum' element={<Sectionmenu status={status} />} />
          </Route>
          <Route path='quez' element={<Quez />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
