import React, { useEffect } from "react";
import "../App.css";

function TabCards({ tabs, clickedTab}) {
   
  const tabClicked = (e) => {
    clickedTab(e);
  };
  return (
    <div className="tabCards">
      {tabs.map((e) => (
        <button key={e.key} onClick={() => tabClicked(e)}>
          {e.title}
        </button>
      ))}
    </div>
  );
}

export default TabCards;
