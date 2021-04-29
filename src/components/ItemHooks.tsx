import React, { useState } from "react";

export const ItemHooks = () => {
  const [items, setItems] = useState<{ id: number; value: number }[]>([
    { id: 0, value: 0 },
  ]);
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 11) },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>追加</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
