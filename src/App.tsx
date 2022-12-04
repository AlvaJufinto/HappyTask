import { createBrowserRouter } from "react-router-dom";


import Text from  "./components/atoms/Text"
import Checkbox from "./components/atoms/Checkbox";
import Image from "./components/atoms/Image";
import ButtonIcon from "./components/molecules/ButtonIcon";
import LinkIcon from "./components/molecules/LinkIcon";
import SideBar from "./components/organisms/Sidebar";

import LogoHC from "./assets/logo/logo-hc.png";
import SettingIcon from "./assets/icon/setting-icon.svg";
import TrashIcon from "./assets/icon/trash-icon.svg";
import HomeIcon from "./assets/icon/home-icon.svg";

import { TextType } from "./components/atoms/Text";
import { ButtonIconType } from "./components/molecules/ButtonIcon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function App() {
  return (
    
    <div className="App">
      <SideBar />
    </div>
  );
}

export default App;
