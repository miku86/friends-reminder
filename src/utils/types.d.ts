export interface NewFriend {
  friendName: string;
  lastTimeContacted: number;
}

export interface Friend extends NewFriend {
  docId: string;
}

export interface FriendsState {
  items: Friend[];
}

export interface AppState {
  friends: FriendsState;
}
