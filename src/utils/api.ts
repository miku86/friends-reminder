import * as firebase from "firebase/app";
import "firebase/auth";
import { COLLECTIONS, db } from "../config/firebase";
import { Credentials, Friend, NewFriend, UpdateFriend, UserId } from "./types";

const api = {
  loadFriends: async (userId: UserId) => {
    const snapshot = await db
      .collection(COLLECTIONS.FRIENDS)
      .where("userId", "==", userId)
      .get();

    let result = [] as Friend[];

    snapshot.forEach((doc: firebase.firestore.DocumentData) => {
      result.push({
        docId: doc.id,
        ...doc.data(),
      });
    });

    return result;
  },
  deleteFriend: async (docId: string) => {
    return db.collection(COLLECTIONS.FRIENDS).doc(docId).delete();
  },
  addFriend: async (newFriend: NewFriend) => {
    const doc = await db.collection(COLLECTIONS.FRIENDS).add(newFriend);
    const friend = {
      ...newFriend,
      docId: doc.id,
    };
    return friend;
  },
  updateLastTimeContacted: async ({
    docId,
    lastTimeContacted,
  }: UpdateFriend) => {
    return db.collection(COLLECTIONS.FRIENDS).doc(docId).update({
      lastTimeContacted,
    });
  },
  signup: async ({ email, password }: Credentials) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signin: async ({ email, password }: Credentials) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signout: async () => {
    return firebase.auth().signOut();
  },
};

export default api;
