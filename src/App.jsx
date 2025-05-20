import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <main className="font-red-hat-text xs:p-8 bg-cream-50 flex min-h-screen flex-col gap-8 p-6 text-base md:p-10 lg:flex-row lg:p-20">
      <ProductList />
      <Cart />
    </main>
  );
}
