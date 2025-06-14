export default function Listening() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-teal-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Аудирование</h1>
          <p className="text-sm mt-1">
            Развивай понимание речи на слух с помощью аудио.
          </p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          Упражнения по аудированию
        </h2>
        {/* Здесь будет контент для упражнений */}
      </main>
    </div>
  );
}
