import { db } from "../config/firebase";
import { Friend } from "./types";

const api = {
  loadFriends: async () => {
    const snapshot = await db.collection("friends").get();

    let result = [] as Friend[];

    snapshot.forEach((doc: firebase.firestore.DocumentData) => {
      result.push(doc.data());
    });

    return result;
  },
};

export default api;
