async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div>
      <div className="mx-auto py-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <img
              src={product.image}
              alt="Product Image"
              className="w-[200px] h-[200px] rounded-lg"
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
