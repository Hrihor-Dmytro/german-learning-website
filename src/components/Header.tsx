import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white py-6 px-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl hover:underline">
          Немецкий онлайн </Link>
        <nav className="space-x-4">
          <Link to="/vocabulary" className="hover:underline">Слова</Link>
          <Link to="/grammar" className="hover:underline">Грамматика</Link>
          <Link to="/listening" className="hover:underline">Аудирование</Link>
        </nav>
      </div>
    </header>
  );
}