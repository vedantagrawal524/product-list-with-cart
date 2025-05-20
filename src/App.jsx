import ConfirmedOrder from "./components/ConfirmedOrder";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import ConfirmContextProvider from "./context/ConfirmContext";
import { useConfirmContext } from "./context/ConfirmContext";
import { useEffect } from "react";

export default function App() {
  return (
    <ConfirmContextProvider>
      <AppContent />
    </ConfirmContextProvider>
  );
}

// Separate component that uses the context
function AppContent() {
  const { showConfirm } = useConfirmContext();

  useEffect(() => {
    if (showConfirm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showConfirm]);

  return (
    <CartContextProvider>
      <main className="font-red-hat-text xs:p-8 bg-cream-50 flex min-h-screen flex-col gap-8 p-6 text-base md:p-10 lg:flex-row lg:p-20">
        {showConfirm && (
          <>
            <div className="fixed inset-0 z-20 bg-black opacity-50"></div>
            <div className="fixed inset-0 z-30 flex items-start justify-center overflow-auto pt-16 lg:pb-10">
              <ConfirmedOrder />
            </div>
          </>
        )}

        <ProductList />
        <Cart />
      </main>
    </CartContextProvider>
  );
}
