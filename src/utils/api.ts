import { db } from "../config/firebase";
import { Friend } from "./types";

const api = {
  loadFriends: async () => {
    const snapshot = await db.collection("friends").get();

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
    return db.collection("friends").doc(docId).delete();
  },
};

export default api;
