import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, cartSwitch] = useState(false)
  function addItem(){
    cartSwitch(isInCart=>!isInCart)
  }
  let isInCartClass = isInCart?"in-cart":"" 
  let isInCartText = isInCart?"Remove From Cart":"Add to Cart"
  return (
    <li className={isInCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{isInCartText}</button>
    </li>
  );
}

export default Item;
