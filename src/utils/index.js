export function getClass(i) {
  console.log(i);
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  }
}
