import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { useConfirmContext } from "../context/ConfirmContext";

export default function CartContain() {
  const { cart } = useCartContext();
  const totalAmount = cart.reduce(
    (price, next) => price + next.price * next.quantity,
    0,
  );
  const { toggleConfirm } = useConfirmContext();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-5 flex flex-row items-center justify-between">
        <p className="text-cream-500 text-[0.95rem] font-[550]">Order Total</p>
        <p className="text-cream-900 text-[1.6rem] font-[700]">
          ${totalAmount.toFixed(2)}
        </p>
      </div>

      <div className="bg-cream-50 text-cream-500 mt-4 flex w-[95%] flex-row items-center justify-center gap-2 self-center rounded-[0.5rem] p-3 text-center text-[0.9rem] font-[400]">
        <img src="/images/icon-carbon-neutral.svg" alt="Tree" />
        <p>
          This is a{" "}
          <span className="text-cream-900 font-[600]">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <button
        onClick={() => toggleConfirm()}
        type="button"
        className="bg-new-red text-cream-50 mt-5 w-[95%] cursor-pointer self-center rounded-full p-3.5 font-[500] hover:bg-red-800"
      >
        Confirm Order
      </button>
    </div>
  );
}
