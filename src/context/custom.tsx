import { UserProps } from "interfaces";
import { createContext, ReactNode, useContext, useState } from "react";
import { CustomProps } from "interfaces";

const Custom = createContext({} as CustomProps);

export const useCustomContext = () => useContext(Custom);

const CustomProvider = ({ children }: { children: ReactNode }) => {
  const [receiver, setReceiver] = useState<UserProps>({});
  const height = "calc((100vh) - 310px)";
  const spacing = 5;

  return (
    <Custom.Provider value={{ spacing, height, receiver, setReceiver }}>{children}</Custom.Provider>
  );
};
export default CustomProvider;
