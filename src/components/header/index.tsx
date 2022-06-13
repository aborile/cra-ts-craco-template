import { memo } from "react";

import { REACT_LOGO } from "@assets/index";
import "./header.scss";

function Header() {
  return (
    <header className="App-header">
      <img src={REACT_LOGO} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
}

export default memo(Header);
