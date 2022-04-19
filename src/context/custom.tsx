import { createContext, ReactNode, useContext } from "react";

interface CustomProps {
  spacing: number;
  height: string;
}

const Custom = createContext({} as CustomProps);

export const useCustomContext = () => useContext(Custom);

const CustomProvider = ({ children }: { children: ReactNode }) => {
  const height = "calc((100vh) - 310px)";
  const spacing = 5;

  return <Custom.Provider value={{ spacing, height }}>{children}</Custom.Provider>;
};
export default CustomProvider;
