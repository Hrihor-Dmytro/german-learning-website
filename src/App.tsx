import './index.css'
import { Route, Routes } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary';
import Grammar from './pages/Grammar';
import Listening from './pages/listening';
import Header from './components/Header';
import Home from './pages/Home';


export default function App() {

  return (
    <div className="App">
        <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vocabulary' element={<Vocabulary />} />
        <Route path='/grammar' element={<Grammar/>} />
        <Route path='/listening' element={<Listening/>} />
      </Routes>
      </main>
    </div>
  )
}

