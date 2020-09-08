import React from "react";
import './css/App.css'
import { routes } from "./router/routes";
import renderRoutes from "./router/renderRoutes";

function App() {
  return <div className="App">{renderRoutes(routes)}</div>;
}

export default App;
