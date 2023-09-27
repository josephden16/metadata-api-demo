import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Navigation Links */}
      <nav className="mb-6 space-x-5">
        <Link className="text-white text-lg underline" href="/">
          Home
        </Link>
        <Link className="text-white text-lg underline" href="/products">
          Products
        </Link>
      </nav>
      <main className="text-white text-center">
        <h1 className="text-4xl mb-4">Welcome to My Online Store</h1>
        <p className="text-lg">
          Discover a wide range of products for all your needs.
        </p>
      </main>
    </div>
  );
}
