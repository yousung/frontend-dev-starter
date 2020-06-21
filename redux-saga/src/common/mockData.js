const friends = [
  { name: '홍길동', age: 15 },
  { name: '고길동', age: 40 },
  { name: '둘리', age: 33 },
  { name: '마이콜', age: 22 },
  { name: '네티', age: 15 },
];

const timelines = [
  { desc: '점심은 맛있었다', likes: 0 },
  { desc: '아침은 맛있었다', likes: 12 },
  { desc: '저녘은 맛있었다', likes: 54 },
  { desc: '아점은 맛있었다', likes: 23 },
  { desc: '단식', likes: 33 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
