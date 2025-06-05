export default function Footer() {
  return (
    <footer className="bg-teal-600 dark:bg-teal-900 text-white py-10 mt-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Немецкий Онлайн. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
