import { useState } from "react";

const Cart = () => {
  const [myCart, setMyCart] = useState([]);
  const AddItem = (item) => {
    const exist = myCart.find((x) => x.id === item.id);
    if (exist) {
      setMyCart(
        myCart.map((x) =>
          x.id === item.id ? { ...exist, qunatity: exist.qunatity + 1 } : x
        )
      );
    } else {
      setMyCart([...myCart, { ...item, qunatity: 1 }]);
    }
  };
  
  const RemoveItem = (item) => {
    const exist = myCart.find((x) => x.id === item.id);
    if (exist.quantity === 1) {
      setMyCart(myCart.filter((x) => x.id !== item.id));
    } else {
      setMyCart(
        myCart.map((x) =>
          x.id === item.id ? { ...exist, quantity: exist.qunatity - 1 } : x
        )
      );
    }
  };

  return <></>;
};
