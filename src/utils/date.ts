export const convertTimestampToHumanTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export const convertHumanTimeToTimeStamp = (humanTime: Date | null): number => {
  if (!humanTime) return 0;
  return humanTime.valueOf();
};
