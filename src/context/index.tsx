import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContextProps } from "interfaces";

const Chat = createContext({} as ContextProps);

export const useChatContext = () => useContext(Chat);

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  // SCROLL TO TOP ON CHANGE PAGE
  useEffect(() => {
    goToTop();
    // eslint-disable-next-line
  }, [pathname]);

  const goToTop = () => window.scroll({ top: 0, left: 0, behavior: "smooth" });

  return <Chat.Provider value={{ user, setUser }}>{children}</Chat.Provider>;
};
export default ChatProvider;
