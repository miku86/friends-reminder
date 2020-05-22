import { randomNumber } from "./random";

export const createMockFriend = (friendName: string) => ({
  docId: randomNumber(10000),
  friendName,
  lastContactTime: randomNumber(1589977129),
});

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
