import Text from  "./components/atoms/Text"
import Checkbox from "./components/atoms/Checkbox";
import Image from "./components/atoms/Image";

import LogoHC from "./assets/logo/logo-hc.png";
import SettingIcon from "./assets/icon/setting-icon.svg";
import ButtonIcon from "./components/molecules/ButtonIcon";
import TrashIcon from "./assets/icon/trash-icon.svg";

import { TextType } from "./components/atoms/Text";

function App() {
  return (
    <div className="App">
      <Text text="Yes" textType={TextType.Title} />
      <Text text="Yes" textType={TextType.Small} />
      <Checkbox />
      <Image imageSrc={LogoHC} imageWidth="42px" />
      <Image imageSrc={SettingIcon} imageWidth="42px" />
      <ButtonIcon buttonIconSrc={TrashIcon} />
    </div>
  );
}

export default App;
