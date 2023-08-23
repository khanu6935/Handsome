import { useEffect } from "react";
import "./App.css";
import useWow from "./customHooks/useWow";
import Home from "./pages/Home";

function App() {
  const { initWow } = useWow();
  useEffect(() => {
    initWow();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
