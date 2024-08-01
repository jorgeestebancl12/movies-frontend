export function getPercentageMovieRatingUtility(average: number) {
  return ((Number(average) / 10) * 100).toFixed(0);
}
