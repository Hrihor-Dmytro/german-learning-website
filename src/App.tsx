import './index.css';
import { Route, Routes } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary';
import Grammar from './pages/Grammar';
import Listening from './pages/listening';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vocabulary' element={<Vocabulary />} />
            <Route path='/grammar' element={<Grammar />} />
            <Route path='/listening' element={<Listening />} />
          </Routes>
        </main>
      </div>
  );
}

