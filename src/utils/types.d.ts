export interface Friend {
  friendId: string;
  friendName: string;
  lastContactTime: number;
}

export interface FriendsState {
  items: Friend[]
}

export interface AppState {
  friends: FriendsState,
}