import * as React from 'react';
import { useContext } from 'react';
import OrderContext from '../context/OrderContext';
export function Header() {
  const {order} = useContext(OrderContext);
  return (
    <div className="Header">
      <h1>Sunny Side Up</h1>
      <p id="orderCount">Order Count: {order.length}</p>
    </div>
  );
}
