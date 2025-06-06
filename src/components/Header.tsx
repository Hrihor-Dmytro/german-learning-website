import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-teal-600 dark:bg-gray-800 text-white dark:text-gray-100 py-6 px-4 shadow-md dark:shadow-gray-900/50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <ThemeToggle />
        <Link
          to="/"
          className="text-white dark:text-gray-100 font-bold text-2xl hover:underline"
        >
          Немецкий онлайн
        </Link>
        {/* Бургер-иконка для мобильных */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Навигация для десктопа */}
        <nav
          aria-label="Основное меню"
          className="hidden md:flex space-x-4"
        >
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
      {/* Боковое меню для мобильных */}
      {isMenuOpen && (
        <nav
          aria-label="Мобильное меню"
          className="md:hidden w-full bg-teal-600 dark:bg-gray-800 px-4 py-3 mt-2"
        >
          <div className="flex flex-col space-y-3">
            <Link
              to="/vocabulary"
              className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Слова
            </Link>
            <Link
              to="/grammar"
              className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Грамматика
            </Link>
            <Link
              to="/listening"
              className="text-white dark:text-gray-300 hover:underline hover:text-teal-200 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Аудирование
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
