/* 
   useSelector es un hook propio de redux, su funcionalidad es:
   obtener el estado actual del store desde cualquier parte de la app.

   Al tener nuestra app centralizada en un único store, podemos "atacar" los reducers,
   para obtener el estado deseado, esto se hace mediamente funciones.

   EN ESTE CASO, para evitar confusiones, separé las funciones selectoras del reducer en este archivo.
   Generalmente, se suelen encontrar en el mismo reducer.js
*/

// El nombre del reducer es el definido en el STORE!, en este caso amountReducer.
export const getAmount = (state) => state.amountReducer.amount;
