import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadFriends } from "../state/friendsSlice";
import { Friend, FriendsState } from "../utils/types";

interface Props {
  loadFriends?: () => void;
  friends?: Friend[];
}

export const App = ({ loadFriends, friends }: Props) => {
  useEffect(() => {
    loadFriends!();
  }, [loadFriends]);

  return (
    <div className="App">
      {friends ? (
        <ul>
          {friends.map(({ friendId, friendName }) => {
            return <li key={friendId}>{friendName}</li>;
          })}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: FriendsState) => ({
  friends: state.items,
});

const mapDispatchToProps = {
  loadFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
