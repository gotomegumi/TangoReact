import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Quez from './Components/Quez';
import Sectionmenu from './Components/Section_menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [mostrecent, setRecent] = useState({
    section:2,
    progress:30,
    answerrate:40
  })

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='menu' element={<Sectionmenu mostrecent={mostrecent} />} />
          <Route path='quez' element={<Quez />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
