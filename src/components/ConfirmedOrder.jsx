import ConfirmItem from "./ConfirmItem";

export default function ConfirmedOrder() {
  return (
    <section className="flex flex-col justify-center">
      <img
        src="/images/icon-order-confirmed.svg"
        alt="Confirm"
        className="h-auto w-10"
      />
      <h1 className="text-cream-900 mt-4 text-[2.2rem] font-[700]">
        Order Confirmed
      </h1>
      <p className="text-cream-400 mt-0 text-[0.95rem] font-[400]">
        We hope you enjoy your food!
      </p>

      <div className="bg-cream-50 mt-6 rounded-[0.5rem] p-6">
        <div className="flex flex-col justify-center gap-2">
          <ConfirmItem />
          <ConfirmItem />
          <ConfirmItem />
          <ConfirmItem />
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <p className="text-cream-500 text-[0.95rem] font-[550]">
            Order Total
          </p>
          <p className="text-cream-900 text-[1.4rem] font-[700]">$46.50</p>
        </div>
      </div>

      <button
        type="button"
        className="bg-new-red text-cream-50 mt-6 w-[95%] cursor-pointer self-center rounded-full p-3.5 font-[500] hover:bg-red-800"
      >
        Start New Order
      </button>
    </section>
  );
}
