import './App.css'

function App() {

  const exercises = [
  {
    title: "Словарный запас",
    description: "Увеличивай запас слов с помощью карточек и тестов.",
    image: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
  },
  {
    title: "Грамматика",
    description: "Учись строить правильные предложения по-немецки.",
    image: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
  },
  {
    title: "Аудирование",
    description: "Развивай понимание речи на слух с помощью аудио.",
    image: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
  },
];

  return (
    <>
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Учить немецкий язык</h1>
          <p className="text-sm mt-1">Интерактивные упражнения и обучение онлайн</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Темы для изучения</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={exercise.image} alt={exercise.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                <p className="text-sm text-gray-700">{exercise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4 mt-10">
        © 2025 Немецкий язык онлайн. Все права защищены.
      </footer>
    </div>
    </>
  )
}

export default App
