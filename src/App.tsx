import Text from  "./components/atoms/Text"

import { TextType } from "./components/atoms/Text";

function App() {
  return (
    <div className="App tw-items-center tw-justify-center">
      <Text text="Yes" textType={TextType.Title} />
      <h1 className="tw-text-orange-default tw-font-extrabold">Hello World!</h1>
      <p className="tw-tracking-widest">This is my first React App.</p>
    </div>
  );
}

export default App;
