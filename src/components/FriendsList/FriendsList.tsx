import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadFriends } from "../../state/friendsSlice";
import { AppState, Friend } from "../../utils/types";

interface Props {
  loadFriends?: () => void;
  friends?: Friend[];
}

export const FriendsList = ({friends, loadFriends}: Props) => {
  useEffect(() => {
    loadFriends!();
  }, [loadFriends]);

  return friends ? (
    <ul>
      {friends.map(({ friendId, friendName }) => (
        <li key={friendId}>{friendName}</li>
      ))}
    </ul>
  ) : (
    <p>Loading</p>
  );
};

const mapStateToProps = (state: AppState) => ({
  friends: state.friends.items,
});

const mapDispatchToProps = {
  loadFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);