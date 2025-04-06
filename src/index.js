import React from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import NavBar from "./components/NavBar";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <BoardView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <div style={{ paddingTop: '80px' }}>
      <h1>2048</h1>
      <App />
    </div>
  </>
);
