import { createBrowserRouter } from "react-router-dom";

import SideBar from "./components/organisms/Sidebar";
import GlobalContainer from "./components/templates/GlobalContainer";
import ItemsContainer from "./components/templates/ItemsContainer";

import { TextType } from "./components/atoms/Text";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function App() {
  return (
    <GlobalContainer sidebar={<SideBar />}>
      <ItemsContainer title="Todo" />
    </GlobalContainer>
  );
}

export default App;
