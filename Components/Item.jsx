export default function Item({ item, onRemove, onToggleCheck }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleCheck(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onRemove(item.id)}>❌</button>
      </li>
    </>
  );
}
