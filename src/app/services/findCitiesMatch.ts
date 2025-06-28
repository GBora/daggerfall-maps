import {ICity} from "../interfaces/ICity";
import cities from "../data/cities.json";

const isSupersetOrEqual = (A: any[], B: any[]): boolean => {
  const setA = new Set(A);
  return B.every(element => setA.has(element));
}

export const findCitiesMatch = (region: string | undefined, desiredLocations: string []): ICity[] => {
  let matchingCities: ICity[] = [];

  // @ts-ignore
  let matchingRegion: ICity[] = cities[region];

  if (matchingRegion) {
    matchingCities = matchingRegion.filter(city => {
      return isSupersetOrEqual(city.serviceCodes, desiredLocations);
    })
    console.log(matchingCities);
  }

  return matchingCities;
}
