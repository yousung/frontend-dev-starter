export function callApiLike() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        res();
      } else {
        rej('callApilike 실패');
      }
    }, 1000);
  });
}
