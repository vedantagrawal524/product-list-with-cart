export default function Cart() {
  return (
    <section className="flex h-max min-w-[30%] flex-col rounded-[0.5rem] bg-white p-6">
      <h1 className="text-new-red text-[1.4rem] font-[700]">Your Cart (0)</h1>
      <img
        src="/images/illustration-empty-cart.svg"
        alt="Empty Cart"
        className="mt-6 h-auto w-[7rem] self-center"
      />
      <p className="text-cream-400 mt-4 self-center text-center text-[0.85rem] font-[600]">
        Your added items will appear here
      </p>
    </section>
  );
}
