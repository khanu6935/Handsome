import { useEffect } from "react";
import "./App.css";
import "animate.css";
import "wowjs/css/libs/animate.css";

// Initialize WOW.js
import WOW from "wowjs";
import Home from "./pages/Home";

const wow = new WOW.WOW();
wow.init();

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
