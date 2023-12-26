import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ friend, onHandleChangeBalance }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoPay, setWhoPay] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";

  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;

    onHandleChangeBalance(whoPay === "user" ? -friendExpense : yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split bill with {friend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>😉You expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      ></input>

      <label>👨🏼‍🤝‍👨🏼 {friend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled></input>

      <label>🙂Who is paying bill?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">I am</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split the bill</Button>
    </form>
  );
}
