// IMPORTAMOS LOS HOOKS PARA CREAR EL STORE
import { createStore, combineReducers } from "redux";

// IMPORTAMOS EL REDUCER ASIGNANDO EL NOMBRE DEL DIRECTORIO + Reducer
import amountReducer from "./amount/reducer"

// Utilizamos El Hook Para Combinar TODOS LOS REDUCER DE LA APP!
const reducers = combineReducers({
  //AQUÍ VAN LOS REDUCER
  amountReducer,
});

// Creamos la Store
const store = createStore(
  reducers,
  // ESTO ES PARA QUE FUNCIONEN LAS DEVTOOLS DEL NAVEGADOR (HAY QUE INSTALAR LA EXTENSIÓN: Redux DevTools )
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
