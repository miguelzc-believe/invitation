import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export default GlobalStateProvider;
export { useGlobalState };
