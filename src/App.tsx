import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Text from  "./components/atoms/Text"
import Checkbox from "./components/atoms/Checkbox";
import Image from "./components/atoms/Image";
import ButtonIcon from "./components/molecules/ButtonIcon";
import LinkIcon from "./components/molecules/LinkIcon";

import LogoHC from "./assets/logo/logo-hc.png";
import SettingIcon from "./assets/icon/setting-icon.svg";
import TrashIcon from "./assets/icon/trash-icon.svg";
import HomeIcon from "./assets/icon/home-icon.svg";

import { TextType } from "./components/atoms/Text";
import { ButtonIconType } from "./components/molecules/ButtonIcon";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
);

function App() {
  return (
    
    <div className="App">
      <Text text="Yes" textType={TextType.Title} />
      <Text text="Yes" textType={TextType.Small} />
      <Checkbox />
      <Image imageSrc={LogoHC} imageWidth="42px" />
      <Image imageSrc={SettingIcon} imageWidth="42px" />
      <ButtonIcon buttonIconSrc={TrashIcon} onClickFunction={() => alert("sup nig")} />
      <LinkIcon LinkIconSrc={HomeIcon} LinkTo="/asdasd" />
    </div>
  );
}

export default App;
