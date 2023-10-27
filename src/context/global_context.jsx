import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({ children }) => {
  const [selectedPort, setSelectedPort] = useState("desktop");
  const [headerTitles, setHeaderTitles] = useState([]);
  const [headerLogo, setHeaderLogo] = useState("");
  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  const handleSetHeaderTitles = (title) => {
    setHeaderTitles((prevTitles) => [...prevTitles, title]);
  };

  const removeTitleFromHeaders = (title) => {
    setHeaderTitles((prevTitles) => {
      if (prevTitles.includes(title)) {
        return prevTitles.filter((t) => t !== title);
      } else {
        return [...prevTitles, title];
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedPort,
        setSelectedPort,
        headerTitles,
        handleSetHeaderTitles,
        removeTitleFromHeaders,
        title,
        setTitle,
        slogan,
        setSlogan,
        aboutUs,
        setAboutUs,
        headerLogo,
        setHeaderLogo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
