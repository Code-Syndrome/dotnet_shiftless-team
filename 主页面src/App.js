import { HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";

function App() {
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  );
}

export default App;
