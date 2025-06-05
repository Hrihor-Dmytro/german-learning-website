import { useRef } from "react";

interface CardProps {
  word: {
    id: number;
    german: string;
    example: string;
    russian: string;
  };
  state: 0 | 1 | 2;
  onClick: () => void;
}

export function Card({ word, state, onClick }: CardProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      onClick={onClick}
      ref={ref}
      className={`
        border rounded-xl p-5 shadow cursor-pointer transition-all duration-300
        bg-white dark:bg-gray-800
        border-gray-200 dark:border-gray-700
        hover:shadow-lg dark:hover:shadow-gray-700/50
      `}
    >
      <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {word.german}
      </p>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          state >= 1 ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        {state >= 1 && (
          <p className="text-gray-700 dark:text-gray-300 mb-2 opacity-100 transition-opacity duration-500">
            📘 <span className="italic">{word.example}</span>
          </p>
        )}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          state === 2 ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        {state === 2 && (
          <p className="text-green-700 dark:text-green-400 font-medium opacity-100 transition-opacity duration-500">
            🇷🇺 {word.russian}
          </p>
        )}
      </div>
    </li>
  );
}
