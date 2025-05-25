import { useState } from "react";
import { vocabulary } from "../data/vocabulary";
import { Card } from "../components/Card";

export default function Vocabulary() {
  const [reveal, setReveal] = useState<{ [key: number]: 0 | 1 | 2 }>({});

  const handleClick = (id: number) => {
    setReveal((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % 3 as 0 | 1 | 2,
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Словарь</h2>
      <ul className="space-y-4">
        {vocabulary.map((word) => (
          <Card
            key={word.id}
            word={word}
            state={reveal[word.id] ?? 0}
            onClick={() => handleClick(word.id)}
          />
        ))}
      </ul>
    </div>
  );
}