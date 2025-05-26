import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-white flex flex-col justify-center items-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-sm">
          Добро пожаловать в мир немецкого языка!
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Учите немецкие слова, тренируйте грамматику и улучшайте восприятие на слух. Всё это — легко, интересно и с любовью к языку. 🚀
        </p>
        <Link to="/vocabulary">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Перейти к карточкам
          </button>
        </Link>
      </div>
    </div>
  );
}