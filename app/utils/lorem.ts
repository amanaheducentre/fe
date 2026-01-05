export function getSampleImages(width: number, height: number, count = 1) {
  return Array.from(
    { length: count },
    () =>
      `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`,
  );
}

export function getSampleImage(width: number, height: number) {
  return getSampleImages(width, height, 1)[0];
}
