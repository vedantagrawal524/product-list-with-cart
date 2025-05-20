export default function CartItem() {
  return (
    <div className="border-cream-100 flex flex-row items-center justify-between border-b-2 py-3">
      <div className="flex flex-col justify-center gap-0.5">
        <p className="text-cream-900 text-[1rem] font-[600]">Apple</p>

        <div className="flex flex-row items-center">
          <p className="text-new-red text-[0.95rem] font-[600]">1x</p>
          <p className="text-cream-400 ml-4 text-[0.95rem] font-[400]">
            @price
          </p>
          <p className="text-cream-500 ml-2 text-[0.95rem] font-[600]">
            $totalPrice
          </p>
        </div>
      </div>

      <button
        type="button"
        className="border-cream-300 group hover:border-cream-900 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          alt="Remove Item"
          className="h-auto w-auto"
        >
          <path
            className="group-hover:fill-cream-900"
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}
