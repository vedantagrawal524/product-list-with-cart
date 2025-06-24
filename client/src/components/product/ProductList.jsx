import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="flex flex-col justify-center gap-6">
      <h1 className="text-cream-900 text-[2.2rem] font-[700]">Desserts</h1>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
