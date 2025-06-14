import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-teal-100 to-teal-300 dark:from-teal-900 dark:to-teal-700 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Добро пожаловать в Немецкий Онлайн!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
          Изучай немецкий язык весело и эффективно. Карточки, грамматика,
          аудирование — всё в одном месте.
        </p>
        <Link
          to="/vocabulary"
          className="inline-block bg-teal-600 hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition"
        >
          Начать учить слова
        </Link>
      </section>
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
            Что вас ждёт
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Карточки слов
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Интерактивные карточки с примерами и переводом для лёгкого
                запоминания.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Грамматика
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Краткие и понятные объяснения с примерами на каждый день.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Аудирование
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Прослушивание фраз и предложений для лучшего понимания речи.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                🚀 Быстрые результаты
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Ты начнёшь понимать и использовать фразы на немецком уже после
                первых занятий.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                📱 Удобно с любого устройства
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Наш сайт адаптирован под мобильные и планшеты — учи в любое
                время, в любом месте.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                🔁 Повторение — мать учения
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Умная система повторений помогает лучше запомнить слова и фразы.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                🎯 Всё по делу
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Никакой воды — только полезные и часто употребляемые слова и
                выражения.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-teal-50 dark:bg-teal-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
            Отзывы пользователей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="italic text-gray-700 dark:text-gray-300">
                "Очень классный сайт! Простые слова, понятные примеры. Начал
                говорить по-немецки за месяц!"
              </p>
              <span className="block mt-4 font-semibold text-gray-800 dark:text-gray-100">
                — Мария, студентка
              </span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="italic text-gray-700 dark:text-gray-300">
                "Мне нравится структура: нажал — видишь пример, нажал ещё —
                перевод. Всё по уму!"
              </p>
              <span className="block mt-4 font-semibold text-gray-800 dark:text-gray-100">
                — Иван, эмигрант в Германии
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          title="Наверх"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
