import { randomNumber } from "./random";
import { MockFriend } from "./types";

export const createMockFriend = ({
  friendName = "",
  docId = true,
  userId = "111",
}) => {
  const friend: MockFriend = {
    userId,
    friendName,
    lastTimeContacted: 0,
  };

  if (docId) {
    friend["docId"] = String(randomNumber(10000));
  }

  return friend;
};

export const createMockCredentials = () => ({
  email: "demo@demo.com",
  password: "test123!",
});

export const createWrongCredentials = () => ({
  email: "abc@def.com",
  password: "abcdef",
});

export const createWrongEmail = () => "abc";
export const createShortPassword = () => "abc";
