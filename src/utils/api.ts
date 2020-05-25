import * as firebase from "firebase/app";
import "firebase/auth";
import { COLLECTIONS, db } from "../config/firebase";
import { Credentials, Friend, NewFriend, UpdateFriend, UserId } from "./types";

const api = {
  loadFriends: async (userId: UserId) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
  deleteFriend: async (docId: string) => {
    try {
      return db.collection(COLLECTIONS.FRIENDS).doc(docId).delete();
    } catch (error) {
      console.log(error);
    }
  },
  addFriend: async (newFriend: NewFriend) => {
    try {
      const doc = await db.collection(COLLECTIONS.FRIENDS).add(newFriend);
      const friend = {
        ...newFriend,
        docId: doc.id,
      };
      return friend;
    } catch (error) {
      console.log(error);
    }
  },
  updateLastTimeContacted: async ({
    docId,
    lastTimeContacted,
  }: UpdateFriend) => {
    try {
      return db.collection(COLLECTIONS.FRIENDS).doc(docId).update({
        lastTimeContacted,
      });
    } catch (error) {
      console.log(error);
    }
  },
  signup: async ({ email, password }: Credentials) => {
    try {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  },
  signin: async ({ email, password }: Credentials) => {
    try {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  },
  signout: async () => {
    try {
      return firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
