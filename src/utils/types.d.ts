export interface Friend {
  friendId: string;
  friendName: string;
  lastTimeContacted: number;
}

export interface FriendsState {
  items: Friend[]
}

export interface AppState {
  friends: FriendsState,
}