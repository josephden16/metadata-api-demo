import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const products = await fetchProducts();
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-2 rounded-lg"
              />
            </Link>
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              {product.title}
            </h3>
            <p className="text-gray-500 line-clamp-6 text-sm">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
