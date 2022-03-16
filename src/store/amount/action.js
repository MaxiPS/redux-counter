// DEFINO UNA CONSTANTE PARA ESTABLECER EL TYPE DEL ACTION Y EVITAR ERRORES EN EL STRING, O SI EN ALGUN MOMENTO QUIERO CAMBIARLO
export const DEPOSITAR_DINERO = "@DEPOSITAR_DINERO";

// DEFINO ACCION DEPOSITAR_DINERO


/* Las acciones en redux sirven para informar a nuestro reducer los cambios que se van a efectuar en la APP,
   Por Ejemplo en la accion que se muestra a continuacion, vamos a decirle que es de tipo DEPOSITAR y
   El "Payload" o la "Carga de datos" en este caso es un entero y es 10.
*/

const depositar = () => {
  return {
    type: DEPOSITAR_DINERO,
    payload: 10,
  };
};

export {depositar}
