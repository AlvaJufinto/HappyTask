import Text from  "./components/atoms/Text"

import { TextType } from "./components/atoms/Text";

function App() {
  return (
    <div className="App items-center justify-center">
      <Text text="Yes" textType={TextType.Title} />
      <Text text="Yes" textType={TextType.Small} />
    </div>
  );
}

export default App;
