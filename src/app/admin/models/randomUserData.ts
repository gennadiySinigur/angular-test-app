import { RandomUser } from './randomUser';

export interface RandomUserData {
  results: [ RandomUser ],
  info: {
    seed: string,
    results: number,
    page: number,
    version: string,
  }
}
