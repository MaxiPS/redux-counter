import React from "react";

// IMPORT FUNCION SELECTORA
import { getAmount } from "../../store/amount/selector";

// IMPORT HOOKS DE REDUX

import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  //Utilizo el hook y hago la llamada a la funcion selectora para obtener el estado
  const amount = useSelector(getAmount);
  return (
    <div>
      <h1>CANTIDAD : {amount}</h1>
      <button>DEPOSITAR $10</button>
      <button>RETIRAR $10</button>
    </div>
  );
};

export default Counter;
