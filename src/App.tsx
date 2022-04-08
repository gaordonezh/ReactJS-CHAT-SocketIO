import ConfigRoutes from "routes";
import ThemeConfig from "theme";
import GlobalStyles from "theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "context";
import moment from "moment-timezone";

const App = () => {
  moment.tz.setDefault("America/Lima");

  return (
    <ThemeConfig mode="dark">
      <GlobalStyles />
      <BrowserRouter>
        <ChatProvider>
          <ConfigRoutes />
        </ChatProvider>
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
