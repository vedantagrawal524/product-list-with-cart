import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

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
      <div className="xs:grid-cols-3 grid grid-cols-1 gap-8">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
