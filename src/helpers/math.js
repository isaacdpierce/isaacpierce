export function randomIntValue(min, max) {
  Math.ceil(min)
  Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function RandomArbValue(min, max) {
  return Math.random() * (max - min) + min
}
