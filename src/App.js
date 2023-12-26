import { useState } from "react";
import FriendsList from "./FriendsList";
import Button from "./Button";
import AddFriendForm from "./AddFriendForm";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriend] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleAddFriend() {
    setAddFriend((addFriend) => !addFriend);
  }

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((prevFriend) =>
      prevFriend?.id === friend.id ? null : friend
    );
  }

  function handleChangeBalance(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {addFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={toggleAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBill
          friend={selectedFriend}
          onHandleChangeBalance={handleChangeBalance}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
