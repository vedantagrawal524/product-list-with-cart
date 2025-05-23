import { useCartContext } from "../../context/CartContext";

export default function Product(props) {
  const { cart, addToCart, increment, decrement, dropFromCart } =
    useCartContext();
  const productSelected = cart.find((item) => item.id === props.item.id);

  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="relative">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={props.item.image.desktop}
          />
          <source media="(min-width: 520px)" srcSet={props.item.image.tablet} />
          <img
            src={props.item.image.mobile}
            alt={props.item.name}
            className={`outline-cream-50 h-auto w-full rounded-[0.5rem] outline-3 transition-all duration-300 ease-in-out ${
              productSelected ? "outline-new-red" : "outline-0"
            }`}
          />
        </picture>

        {!productSelected ? (
          <button
            onClick={() => addToCart(props.item)}
            type="button"
            className="border-cream-400 hover:border-new-red hover:text-new-red : group absolute right-0 -bottom-5 left-0 flex h-[2.7rem] w-[10rem] cursor-pointer flex-row items-center justify-center gap-1.5 place-self-center rounded-full border-1 bg-white px-6 py-2"
          >
            <img
              src="/images/icon-add-to-cart.svg"
              alt="Cart"
              className="h-auto w-5"
            />
            <span className="text-cream-900 group-hover:text-new-red text-[0.9rem] font-[600]">
              Add to Cart
            </span>
          </button>
        ) : (
          <div className="bg-new-red absolute right-0 -bottom-5 left-0 flex h-[2.7rem] w-[10rem] flex-row items-center justify-between place-self-center rounded-full px-3 py-2">
            <button
              onClick={() =>
                productSelected.quantity !== 1
                  ? decrement(props.item.id)
                  : dropFromCart(props.item.id)
              }
              type="button"
              className="border-cream-100 hover:bg-cream-100 group v flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className="h-auto w-auto"
                alt="Decrement-quantity"
              >
                <path
                  className="group-hover:fill-new-red"
                  fill="#fff"
                  d="M0 .375h10v1.25H0V.375Z"
                />
              </svg>
            </button>

            <p className="text-cream-100 text-[0.9rem] font-[600]">
              {productSelected.quantity}
            </p>

            <button
              onClick={() => increment(props.item.id)}
              type="button"
              className="border-cream-100 hover:bg-cream-100 group flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="h-auto w-auto"
                alt="Increment-quantity"
              >
                <path
                  className="group-hover:fill-new-red"
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-cream-400 text-[0.85rem] font-[500]">
          {props.item.category}
        </p>
        <p className="text-cream-900 text-[1rem] font-[600]">
          {props.item.name}
        </p>
        <p className="text-new-red text-[1.02rem] font-[600]">
          ${props.item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
