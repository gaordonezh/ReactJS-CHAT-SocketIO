import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ContextProps } from "interfaces";
import { getUserInfo } from "requests/auth";

const Chat = createContext({} as ContextProps);

export const useChatContext = () => useContext(Chat);

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState({});
  const generalKey = "1234567890";

  // SCROLL TO TOP ON CHANGE PAGE
  useEffect(() => {
    goToTop();
    // eslint-disable-next-line
    getUserData();
  }, [pathname]);

  const getUserData = async () => {
    try {
      const res = await getUserInfo();
      if (res) {
        setUser({ ...res });
        navigate("/chat");
      } else navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  const goToTop = () => window.scroll({ top: 0, left: 0, behavior: "smooth" });

  return <Chat.Provider value={{ user, setUser, generalKey }}>{children}</Chat.Provider>;
};
export default ChatProvider;
