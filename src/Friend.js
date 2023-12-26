import Button from "./Button";

export default function Friend({ friendObj, onSelectFriend, selectedFriend }) {
  const selected = friendObj.id === selectedFriend?.id;

  function handlerSelectFriend(friend) {
    onSelectFriend(friend);
  }

  return (
    <li className={selected ? "selected" : ""}>
      <img src={friendObj.image} alt={friendObj.name}></img>
      <h3>{friendObj.name}</h3>

      {friendObj.balance < 0 && (
        <p className="red">
          {friendObj.name} owe you {Math.abs(friendObj.balance)}$
        </p>
      )}

      {friendObj.balance > 0 && (
        <p className="green">
          You owes {friendObj.name} {Math.abs(friendObj.balance)}$
        </p>
      )}

      {friendObj.balance === 0 && <p>You and {friendObj.name} are even</p>}

      <Button onClick={() => handlerSelectFriend(friendObj)}>
        {selected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
