import CartEmpty from "./CartEmpty";
import CartContain from "./CartContain";

export default function Cart() {
  return (
    <section className="flex h-max min-w-[30%] flex-col justify-center rounded-[0.5rem] bg-white p-6">
      <h1 className="text-new-red mb-1 text-[1.4rem] font-[700]">
        Your Cart (0)
      </h1>
      <CartEmpty />
      {/* <CartContain /> */}
    </section>
  );
}
