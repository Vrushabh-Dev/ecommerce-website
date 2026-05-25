import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-14 hover:text-orange-500 hover:underline underline-offset-8 transition duration-300 cursor-pointer">
          Our Products
        </h1>
        {loading && (
          <h2 className="text-center text-2xl font-semibold">
            Loading Products...
          </h2>
        )}
        {error && (
          <h2 className="text-center text-red-500 text-2xl">{error}</h2>
        )}

        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain"
              />
              <h2 className="text-lg font-semibold mt-5 line-clamp-2 hover:text-orange-500 hover:underline underline-offset-4 transition duration-300 cursor-pointer min-h-14">
                {product.title}
              </h2>
              <p className="text-orange-500 text-2xl font-bold mt-3 mb-5">
                ${product.price}
              </p>

              <button className="w-full mt-auto bg-black text-white py-3 rounded-xl hover:bg-orange-500 transition duration-300">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
