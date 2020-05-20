import { randomNumber } from "./random";

export const createMockFriend = (friendName: string) => ({
  friendId: randomNumber(10000),
  friendName,
  lastContactTime: randomNumber(1589977129),
});
