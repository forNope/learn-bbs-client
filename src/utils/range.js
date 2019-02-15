export default function range (target, min, max) {
  return target < min
    ? min
    : target > max
      ? max
      : target
}
