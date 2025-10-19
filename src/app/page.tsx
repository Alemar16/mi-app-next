export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          🧪 Prueba
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Esta es una aplicación de prueba construida con{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Next.js
          </span>{" "}
          y{" "}
          <span className="font-semibold text-orange-600 dark:text-orange-400">
            Bun
          </span>
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Servidor en funcionamiento</span>
        </div>
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Proyecto configurado con TypeScript, ESLint y Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
