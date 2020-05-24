export type UserId = string | undefined | null;
export type DocId = string;
export type LastTimeContacted = number;
export type FriendName = string;
export type IsAuthenticated = boolean;
export type AuthError = string | null;
export type Email = string;
export type Password = string;

export interface NewFriend {
  userId: UserId;
  friendName: FriendName;
  lastTimeContacted: LastTimeContacted;
}

export interface Friend extends NewFriend {
  docId: DocId;
}

export interface MockFriend extends NewFriend {
  docId?: DocId;
}

export interface UpdateFriend {
  docId: DocId;
  lastTimeContacted: LastTimeContacted;
}

export interface AuthState {
  isAuthenticated: IsAuthenticated;
  userId: UserId;
  authError: AuthError;
}
export interface FriendsState {
  items: Friend[];
}

export interface AppState {
  auth: AuthState;
  friends: FriendsState;
}

export interface Credentials {
  email: Email;
  password: Password;
}
