import { COLLECTIONS, db } from "../config/firebase";
import { Friend, NewFriend } from "./types";

const api = {
  loadFriends: async () => {
    const snapshot = await db.collection(COLLECTIONS.FRIENDS).get();

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
};

export default api;
