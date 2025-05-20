import { createContext, useContext, useState } from "react";

const ConfirmContext = createContext();

export default function ConfirmContextProvider({ children }) {
  const [showConfirm, setShowConfirm] = useState(false);

  function toggleConfirm() {
    setShowConfirm((prev) => !prev);
  }

  return (
    <ConfirmContext.Provider value={{ showConfirm, toggleConfirm }}>
      {children}
    </ConfirmContext.Provider>
  );
}

export function useConfirmContext() {
  const { showConfirm, toggleConfirm } = useContext(ConfirmContext);

  return { showConfirm, toggleConfirm };
}
