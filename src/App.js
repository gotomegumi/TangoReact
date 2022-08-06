import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Quez from './Components/Quez';
import Sectionmenu from './Components/Sectionmenu';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='menu' element={<Sectionmenu />} />
          <Route path='quez' element={<Quez />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
