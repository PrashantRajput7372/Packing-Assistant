import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onRemove,
  onToggleCheck,
  onRestClick,
}) {
  const [sortBY, setShortBy] = useState("input");
  let sortedItems;
  if (sortBY === "input") sortedItems = items;
  if (sortBY === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBY === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onRemove={onRemove}
            onToggleCheck={onToggleCheck}
            key={item.id}
          />
        ))}
      </ul>

      {items.length === 0 ? (
        <div>
          <h2>Start By Adding Items Required for this Trip!!! 🎉👜🎉 </h2>
        </div>
      ) : (
        <div>
          <button onClick={onRestClick}>Reset</button>

          <select value={sortBY} onChange={(e) => setShortBy(e.target.value)}>
            <option value="input">short by input</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed</option>
          </select>
        </div>
      )}
    </div>
  );
}
