export default function CartEmpty() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <img
          src="/images/illustration-empty-cart.svg"
          alt="Empty Cart"
          className="mt-5 h-auto w-[7rem] self-center"
        />
        <p className="text-cream-400 mt-4 self-center text-center text-[0.85rem] font-[600]">
          Your added items will appear here
        </p>
      </div>
    </>
  );
}
