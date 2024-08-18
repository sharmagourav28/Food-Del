import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcardItems] = useState({});
  const addTocart = (itemId) => {
    if (!cartItems[itemId]) {
      setcardItems((prev) => ({ ...prev, [itemId]: 1 }));
      // kabhi add to cart m kuch nhi h to vo 1 kardega
    } else {
      setcardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      //  kabhi kuch select karka rakha h to increase kardega
    }
  };

  const removeFromCard = (itemId) => {
    setcardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    //  remove krdega kabhi minus p click kra ho to
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextvalue = {
    food_list,
    cartItems,
    setcardItems,
    addTocart,
    removeFromCard,
  };
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
