import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResizingButtons from "./components/ResizingButtons";
import Main from "./components/Main";

function App() {
  // const [isDark, setIsDark] = useState(true);

  return (
    <main>
      <Header />
      <ResizingButtons />
      <Main />
    </main>
  );
}

export default App;