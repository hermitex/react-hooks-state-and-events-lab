import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setisDarkMode] = useState(false);
  

  function handleClick() {
    setisDarkMode((isDarkMode) => !isDarkMode);
  }



  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={items}  />
    </div>
  );
}

export default App;
