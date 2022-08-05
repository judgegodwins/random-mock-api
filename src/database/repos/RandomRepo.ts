import randomWordsData from "../data/randomwordsdb.json";

export default class RandomRepo {
  static getRandomWords(offset: number, limit: number): string[] {
    return randomWordsData.slice(offset, offset + limit);
  }
}
