import { useCartContext } from "../context/CartContext";
import CartEmpty from "./CartEmpty";
import CartContain from "./CartContain";

export default function Cart() {
  const { cart } = useCartContext();
  const cartItemsCnt = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="flex h-max min-w-[30%] flex-col justify-center rounded-[0.5rem] bg-white p-6">
      <h1 className="text-new-red mb-1 text-[1.4rem] font-[700]">
        Your Cart ({cartItemsCnt})
      </h1>
      {cartItemsCnt ? <CartContain /> : <CartEmpty />}
    </section>
  );
}
