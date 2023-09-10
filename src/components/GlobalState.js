import { useContext } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  <GlobalContext.Provider value="">{children}</GlobalContext.Provider>;
};
