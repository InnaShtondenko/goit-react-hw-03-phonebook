
export function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const opacity = Math.random();
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}