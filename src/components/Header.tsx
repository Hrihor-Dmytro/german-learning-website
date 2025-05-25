import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-6 px-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Немецкий онлайн</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Слова</Link>
          <Link to="/grammar" className="hover:underline">Грамматика</Link>
          <Link to="/listening" className="hover:underline">Аудирование</Link>
        </nav>
      </div>
    </header>
  );
}