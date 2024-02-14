import { createContext, useState } from "react";

const AllContext = createContext();

function AllContextProvider({ children }) {

  // Theme Context
  const [isDarkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  }
  return (
    <AllContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </AllContext.Provider>
  );

  
}

export { AllContextProvider, AllContext };
