export interface NewFriend {
  friendName: string;
  lastTimeContacted: number;
}

export interface Friend extends NewFriend {
  docId: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  uid: null | string;
}
export interface FriendsState {
  items: Friend[];
}

export interface AppState {
  auth: AuthState;
  friends: FriendsState;
}

export interface Credentials {
  email: string;
  password: string;
}
