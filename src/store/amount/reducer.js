// IMPORTO LA CONSTANTE DEL TYPE (STRING)
import { DEPOSITAR_DINERO, RETIRAR_DINERO } from "./action";

// Definimos un estado inicial del componente

const initialState = {
  // AQUÍ VAN LOS "ESTADOS", Siempre y obligatoriamente deben estar ASIGNADOS!!
  amount: 0,
};

/* 
  DEFINIMOS NUESTRO REDUCER , Esto no es más que una función que recibe 2 parámetros:

  El Primero: es una asignación inline de nuestro estado inicial
  El Segundo: es una acción (Esta es la acción que definimos anteriormente)

  Funcionamiento:

  Al hacer "dispatch" de una acción en un determinado componente de la app
  nuestro reducer la recibe y la "filtra" a través de un SWITCH. En nuestro action.js
  se explica que una acción se compone de un TYPE y un PAYLOAD, lo que se hace aquí es filtrar
  a través del TYPE , y modificamos el estado inicial al obtenido del PAYLOAD.

  ADVERTENCIA: EL DEFAULT DEL SWITCH SIEMPRE DEBE DEVOLVER EL ESTADO INICIAL(state) !!.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case DEPOSITAR_DINERO:
      return {
        ...state,
        amount: state.amount + action.payload,
      };

    case RETIRAR_DINERO:
      return {
        ...state,
        amount: state.amount - action.payload,
      };

    default:
      return state;
  }
};
