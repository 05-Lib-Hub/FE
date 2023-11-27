import React, { useState } from 'react';
import OrderList from './OrderList';
import DownIcon from '../icons/DownIcon';
import useClickOutside from '../../../hooks/useClickOutside';

export default function Order({ list, curOrderBy, handleOrderBy }) {
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);
  const ref = useClickOutside(() => setIsOrderListOpen(false));

  return (
    <div
      className="relative w-28 border h-7 flex items-center cursor-pointer z-50"
      onClick={() => setIsOrderListOpen(!isOrderListOpen)}
      ref={ref}
    >
      <div className="text-center w-full flex justify-center items-center gap-2">
        {curOrderBy}
        <DownIcon />
      </div>
      {isOrderListOpen && (
        <OrderList list={list} handleOrderBy={handleOrderBy} />
      )}
    </div>
  );
}
