import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((item) => (
        <MenuItem
          price={item.price}
          itemName={item.itemName}
          description={item.description}
          srcImg={item.foodImage}
          isFavorite={item.isFavorite}
          callback
        />
      ))}
    </div>
  );
}

export default MenuList;
