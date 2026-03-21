export const getRandomFloatsForBubbles = (length, count) => {
  let Numbers = [];
  while (length--) {
    let obj = [];
    for (let i = 0; i < count; i++) {
      obj.push(Math.random());
    }
    Numbers.push(obj);
  }

  return Numbers;
};
