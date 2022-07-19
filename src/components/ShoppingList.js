import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("");
  const [itemData, setItemData] = useState(items);

  function onCategoryChange(event) {
    let category = event.target.value;
    let newItemsData = items.filter((item) => item.category === category);
    setselectedCategory(category);
    setItemData(newItemsData);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemData.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
