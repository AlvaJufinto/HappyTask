import { createBrowserRouter } from "react-router-dom";

import SideBar from "./components/organisms/Sidebar";
import GlobalContainer from "./components/templates/GlobalContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function App() {
  return (
    <GlobalContainer sidebar={<SideBar />}>
      asdasd
    </GlobalContainer>
  );
}

export default App;
