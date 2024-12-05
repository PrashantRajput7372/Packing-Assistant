import { useState } from "react";
export default function Form(props) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDesciption] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return alert("Please add a item");
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    props.onHandel(newItem);
    setDesciption("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for this Trip?😒</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        ;
      </select>
      <input
        type="text"
        placeholder=" item"
        value={description}
        onChange={(e) => {
          setDesciption(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
