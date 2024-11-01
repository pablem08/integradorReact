import { useState, createContext } from "react";

//Creamos el contexto
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpen = () => setIsMenuOpen(!isMenuOpen);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toogleMenu: handleOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
