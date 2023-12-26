import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addFriendHandlerForm(e) {
    e.preventDefault();
    const userId = crypto.randomUUID();
    const newFriend = {
      name: name,
      image: `${image}?=${userId}`,
      balance: 0,
      id: userId,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={addFriendHandlerForm}>
      <label>👩🏽‍🤝‍🧑🏼Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>🖼Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}
