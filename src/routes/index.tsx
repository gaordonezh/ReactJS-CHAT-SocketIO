import { Route, Routes } from "react-router-dom";
import routes from "./config";
import Page401 from "pages/Errors/Page401";
import { useChatContext } from "context";

const ConfigRoutes = () => {
  const {} = useChatContext();

  return (
    <Routes>
      {routes.map((e, ind) => {
        const { path, element: Component, children, isPrivate } = e;
        return isPrivate ? (
          <Route path={path} element={<Component />} key={ind}>
            {children.map((el, indx) => {
              const { path: ruta, element: Element } = el;
              return <Route path={ruta} element={true ? <Element /> : <Page401 />} key={indx} />;
            })}
          </Route>
        ) : (
          <Route path={path} element={<Component />} key={ind}>
            {children.map((el, indx) => {
              const { path: ruta, element: Element } = el;
              return <Route path={ruta} element={<Element />} key={indx} />;
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default ConfigRoutes;
