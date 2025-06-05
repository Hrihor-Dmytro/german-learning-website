import { useState } from "react";
import { grammarTopics } from "../data/grammar";

const levels = ["A1", "A2", "B1", "B2", "C1"] as const;

export default function Grammar() {
  const [selectedLevel, setSelectedLevel] = useState<
    "A1" | "A2" | "B1" | "B2" | "C1"
  >("A1");

  const topics = grammarTopics.filter((topic) => topic.level === selectedLevel);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="bg-teal-500 dark:bg-teal-700 text-white py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Грамматика</h1>
          <p className="text-sm mt-1">
            Учись строить правильные предложения по-немецки.
          </p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex gap-2 mb-6">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedLevel === level
                  ? "bg-teal-600 dark:bg-teal-800 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Упражнения по грамматике: уровень {selectedLevel}
        </h2>
        <div className="space-y-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {topic.title}
              </h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                {topic.description}
              </p>
              {topic.examples && (
                <div className="mb-3">
                  <h4 className="font-medium mb-1 text-gray-900 dark:text-gray-100">
                    Примеры:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {topic.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
              {topic.exercises && (
                <div>
                  <h4 className="font-medium mb-1 text-gray-900 dark:text-gray-100">
                    Упражнения:
                  </h4>
                  <ul className="list-decimal pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {topic.exercises.map((exercise, idx) => (
                      <li key={idx}>{exercise}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
