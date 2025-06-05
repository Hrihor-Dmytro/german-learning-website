import { useState, useMemo } from "react";
import { vocabulary } from "../data/vocabulary";
import { Card } from "../components/Card";
import { ArrowUp } from "lucide-react";

const levelsOrder = ["A1", "A2", "B1", "B2", "C1"];

export default function Vocabulary() {
  const [reveal, setReveal] = useState<{ [key: number]: 0 | 1 | 2 }>({});
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const cardsPerPage = 5;

  // Мемоизированные вычисления для оптимизации
  const { filteredCards, totalPages, paginatedCards } = useMemo(() => {
    const filtered = vocabulary.filter(
      (word) =>
        word.level === selectedLevel &&
        (word.german.toLowerCase().includes(searchQuery.toLowerCase()) ||
          word.russian.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    const total = Math.ceil(filtered.length / cardsPerPage);
    const start = (currentPage - 1) * cardsPerPage;
    const paginated = filtered.slice(start, start + cardsPerPage);

    return {
      filteredCards: filtered,
      totalPages: total,
      paginatedCards: paginated,
    };
  }, [selectedLevel, currentPage, searchQuery]);

  const handleClick = (id: number) => {
    setReveal((prev) => ({
      ...prev,
      [id]: (((prev[id] ?? 0) + 1) % 3) as 0 | 1 | 2,
    }));
  };

  const changeLevel = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Словарь
      </h2>

      {/* фильтр и поиск */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {levelsOrder.map((level) => (
            <button
              key={level}
              onClick={() => changeLevel(level)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedLevel === level
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Поиск по словам..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
        />
      </div>

      {/* Статистика */}
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Найдено слов: {filteredCards.length} | Показано: {paginatedCards.length}
      </div>

      {/* Список карточек */}
      {paginatedCards.length > 0 ? (
        <ul className="space-y-4">
          {paginatedCards.map((word) => (
            <Card
              key={word.id}
              word={word}
              state={reveal[word.id] ?? 0}
              onClick={() => handleClick(word.id)}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center py-8">
          {searchQuery
            ? "Ничего не найдено по вашему запросу"
            : `Нет слов для уровня ${selectedLevel}`}
        </p>
      )}

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full bg-teal-600 text-white disabled:opacity-50 hover:bg-teal-700 transition-colors"
          >
            Назад
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-full ${
                  currentPage === i + 1
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-teal-600 text-white disabled:opacity-50 hover:bg-teal-700 transition-colors"
          >
            Вперед
          </button>
        </div>
      )}

      {/* Кнопка "Наверх" */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          title="Наверх"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
