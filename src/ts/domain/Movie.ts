import Buyable from "./Buyable";

export default class Movie {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly nameEng: string,
    readonly imax: boolean,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: any,
    readonly time: string,
    readonly price: number
  ) {}
}
