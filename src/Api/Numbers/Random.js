export default function RandomNumber(rangeMin = 0, rangeMax = 0) {
  
  // Fetch random without range
  if (!rangeMax)
    throw new TypeError('rangeMax is required')

  return Math.floor(
    Math.random() * (rangeMax - rangeMin) + rangeMin
  );
}
