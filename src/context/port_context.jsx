import { createContext, useContext, useState } from "react";

const PortContext = createContext();

export const usePortContext = () => {
  return useContext(PortContext);
};

export const PortProvider = ({ children }) => {
  const [selectedPort, setSelectedPort] = useState("desktop");

  return (
    <PortContext.Provider value={{ selectedPort, setSelectedPort }}>
      {children}
    </PortContext.Provider>
  );
};
