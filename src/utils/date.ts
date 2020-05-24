export const convertTimestampToHumanTime = (timestamp: number): string =>
  new Date(timestamp * 1000).toLocaleDateString();

export const convertHumanTimeToTimeStamp = (humanTime: Date | null): number =>
  humanTime ? humanTime.valueOf() : 0;

export const getCurrentTimestamp = (): number => new Date().valueOf();
