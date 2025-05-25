import './index.css'
import { Route, Routes } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary';
import Grammar from './pages/Grammar';
import Listening from './pages/listening';
import Header from './components/Header';


export default function App() {

  return (
    <div className="App">
        <Header/>
      <main className="max-w-5xl mx-auto px-4 py-10">
      <Routes>
        <Route path='/' element={<Vocabulary/>} />
        <Route path='/grammar' element={<Grammar/>} />
        <Route path='/listening' element={<Listening/>} />
      </Routes>
      </main>
    </div>
  )
}

