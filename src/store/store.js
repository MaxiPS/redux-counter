// IMPORTAMOS LOS HOOKS PARA CREAR EL STORE
import { createStore, combineReducers } from "redux";

// Utilizamos El Hook Para Combinar TODOS LOS REDUCER DE LA APP!
const reducers = combineReducers({
  //AQUI VAN LOS REDUCER
});

// Creamos la Store
const store = createStore(
  reducers,
  // ESTO ES PARA QUE FUNCIONEN LAS DEVTOOLS DEL NAVEGADOR (HAY QUE INSTALAR LA EXTENSION)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
