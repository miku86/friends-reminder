import React from "react";
import FriendsList from "./FriendsList/FriendsList";

interface Props {}

export const App = (props: Props) => {
  return (
    <div className="App">
      <FriendsList />
    </div>
  );
};



export default App;
