export const convertTimestampToHumanTime = (timestamp: number): string => {
  return (new Date(timestamp * 1000)).toLocaleDateString();
}