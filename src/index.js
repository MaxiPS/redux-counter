import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*Para Que Nuestra APP Este "GOBERNADA" Por nuestro store , debemos asignarle un Proveedor(Solo puede haber uno)
y debe englobar TODA LA APP, esto se puede hacer aqui (index.js) o en el APP (app.js) */

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
