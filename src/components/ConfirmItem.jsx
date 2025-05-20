export default function ConfirmItem() {
  return (
    <div className="border-cream-100 flex flex-row items-center justify-between border-b-2 py-2.5">
      <div className="flex flex-row items-center gap-3">
        <img
          src="/public/images/image-baklava-thumbnail.jpg"
          alt="Item name"
          className="h-auto w-[3.5rem] rounded-[0.5rem]"
        />

        <div className="flex flex-col justify-center gap-0.5">
          <p className="text-cream-900 text-[1rem] font-[600]">Apple</p>

          <div className="flex flex-row items-center">
            <p className="text-new-red text-[0.95rem] font-[600]">1x</p>
            <p className="text-cream-400 ml-4 text-[0.95rem] font-[400]">
              @price
            </p>
          </div>
        </div>
      </div>
      <p className="text-cream-900 ml-2 text-[0.95rem] font-[600]">
        $totalPrice
      </p>
    </div>
  );
}
