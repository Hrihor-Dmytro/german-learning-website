import { Link } from 'react-router-dom';
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-teal-600 dark:bg-gray-800 text-white dark:text-gray-100 py-6 px-4 shadow-md dark:shadow-gray-900/50">
      <div className="max-w-5xl mx-auto flex justify-between items-center ">
        <ThemeToggle />
        <Link 
          to="/" 
          className="text-white dark:text-gray-100 font-bold text-2xl hover:underline"
        >
          Немецкий онлайн
        </Link>
        <nav aria-label="Основное меню" className="space-x-4">
          <Link 
            to="/vocabulary" 
            className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
          >
            Слова
          </Link>
          <Link 
            to="/grammar" 
            className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
          >
            Грамматика
          </Link>
          <Link 
            to="/listening" 
            className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
          >
            Аудирование
          </Link>
        </nav>
      </div>
    </header>
  );
}
