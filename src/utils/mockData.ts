import { randomNumber } from "./random";

export const createMockFriend = (friendName: string) => ({
  docId: randomNumber(10000),
  friendId: randomNumber(10000),
  friendName,
  lastContactTime: randomNumber(1589977129),
});
