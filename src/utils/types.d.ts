export interface NewFriend {
  userId: string | undefined | null;
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
  userId: string | undefined | null;
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
