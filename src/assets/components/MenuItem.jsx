import React, { useState } from "react";

function MenuItem({ itemName, description, price, srcImg, isFavorite }) {
  const [liked, setLiked] = useState(isFavorite);
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  function handleClickFavorite() {
    setLiked(!liked);
  }
  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          {/* the image will receive the url src from the props */}
          <img src={srcImg} alt={itemName} />
        </div>
        <div className="itemDescription">
          {/* the h3 will receive the item name from the props */}
          <h3>{itemName}</h3>
          {/* the p will receive the item description from the props */}
          <p>{description}</p>
        </div>
      </div>
      <div className="rightContainer">
        {/* the div will receive the item price from the props */}
        <div>{price} EUR</div>

        {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
        <div
          id="favorite"
          className={liked ? "isFavorite" : "notFavorite"}
          onClick={handleClickFavorite}
        />
      </div>
    </div>
  );
}

export default MenuItem;
