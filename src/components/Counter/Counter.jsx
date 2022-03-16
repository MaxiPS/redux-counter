import React from "react";

// IMPORT FUNCION SELECTORA
import { getAmount } from "../../store/amount/selector";

// IMPORT FUNCION DE ACCION
import { depositar } from "../../store/amount/action";

// IMPORT HOOKS DE REDUX

import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  //Utilizo el hook y hago la llamada a la funcion selectora para obtener el estado
  const amount = useSelector(getAmount);
  // creo una constante con el hook dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>CANTIDAD : {amount}</h1>
      {/* HAGO EL DISPATCH de la action al hacer click en el boton */}
      <button onClick={() => dispatch(depositar())}>DEPOSITAR $10</button>
      <button>RETIRAR $10</button>
    </div>
  );
};

export default Counter;
