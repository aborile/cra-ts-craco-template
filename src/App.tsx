import { memo } from "react";
import { Header } from "@components/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default memo(App);
