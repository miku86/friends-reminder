import { auth } from "firebase";
import { COLLECTIONS, db } from "../config/firebase";
import { Credentials, Friend, NewFriend, UserId } from "./types";

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
  signup: async ({ email, password }: Credentials) => {
    return auth().createUserWithEmailAndPassword(email, password);
  },
  signin: async ({ email, password }: Credentials) => {
    return auth().signInWithEmailAndPassword(email, password);
  },
  signout: async () => {
    return auth().signOut();
  },
};

export default api;
