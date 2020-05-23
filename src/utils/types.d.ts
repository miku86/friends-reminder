export type UserId = string | undefined | null;

export interface NewFriend {
  userId: UserId;
  friendName: string;
  lastTimeContacted: number;
}

export interface Friend extends NewFriend {
  docId: string;
}

export interface MockFriend extends NewFriend {
  docId?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  userId: UserId;
  authError: string | null;
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
