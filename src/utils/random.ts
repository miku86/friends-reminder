export const randomNumber = (max: number)=> {
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}