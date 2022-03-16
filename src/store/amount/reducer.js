// IMPORTO LA CONSTANTE DEL TYPE (STRING)
import { DEPOSITAR_DINERO, RETIRAR_DINERO } from "./action";

// Definimos un estado inicial del componente

const initialState = {
  // AQUI VAN LOS "ESTADOS", Siempre y obligatoriamente deben estar ASIGNADOS!!
  amount: 0,
};

/* DEFINIMOS NUESTRO REDUCER , Esto no es mas que una funcion que recibe 2 parametros:

   El Primero : es una asignacion inline de nuestro estado inicial
   El Segundo : es una accion (Esta es la accion que definimos anteriormente)

   Funcionamiento: 

   Al hacer "dispatch" de una accion en un determinado componente de la app
   nuestro reducer la recibe y la "filtra" a traves de un SWITCH. En nuesto action.js
   se explica que una accion se compone de un TYPE y un PAYLOAD, lo que se hace aqui es filtrar
   a traves del TYPE , y modificamos el estado inicial al obtenido del PAYLOAD.

   ADVERTENCIA: EL DEFAULT DEL SWITCH SIEMPRE DEBE DEVOLVER EL ESTADO INCIAL(state) !!.
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
