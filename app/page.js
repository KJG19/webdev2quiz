import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-extrabold text-center text-green-600 mb-10">
          Kyles Coding Quiz
        </h1>
        <div className="flex items-center justify-center">
          <Link
            href="/pages"
            className="bg-blue-500 text-white text-3xl font-semibold py-4 px-8 rounded-lg hover:bg-blue-600 shadow-lg hover:scale-105"
          >
            Start The Quiz!
          </Link>
        </div>
      </div>
    </main>
  );
}
