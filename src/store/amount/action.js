// DEFINO UNA CONSTANTE PARA ESTABLECER EL TYPE DEL ACTION Y EVITAR ERRORES EN EL STRING, O SI EN ALGÚN MOMENTO QUIERO CAMBIARLO
export const DEPOSITAR_DINERO = "@DEPOSITAR_DINERO";
export const RETIRAR_DINERO = "@RETIRAR_DINERO";

// DEFINO ACCIÓN DEPOSITAR_DINERO

/* Las acciones en redux sirven para informar a nuestro reducer los cambios que se van a efectuar en la APP,
   Por Ejemplo en la acción que se muestra a continuación, vamos a decirle que es de tipo DEPOSITAR y
   El "Payload" o la "Carga de datos" en este caso es un entero y es 10.
*/

const depositar = () => {
  return {
    type: DEPOSITAR_DINERO,
    payload: 10,
  };
};

const retirar = () => {
  return {
    type: RETIRAR_DINERO,
    payload: 10,
  };
};

export { depositar, retirar };
