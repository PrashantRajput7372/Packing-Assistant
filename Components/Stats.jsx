import PropTypes from "prop-types"; // Import PropTypes

export default function Stats({ items }) {
  const itemLenght = items.length;
  const packedItem = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((packedItem / itemLenght) * 100);
  if (packedPercentage === 100)
    return (
      <footer className="stats">
        <h2>All Items Packed Yor are all set to go !!!✈️</h2>
      </footer>
    );
  if (itemLenght === 0)
    return (
      <footer className="stats">
        <h2>Start Adding Items for Trip</h2>
      </footer>
    );
  return (
    <footer className="stats">
      <h2>
        You have {itemLenght} items in you List, You have already {packedItem}{" "}
        packed {packedPercentage}%
      </h2>
    </footer>
  );
}
Stats.propTypes = {
  items: PropTypes.array.isRequired, // Define that onHandle should be a function and is required
};
