import randomWordsData from "../data/randomwordsdb.json";

export default class RandomRepo {
  static getRandomWords(offset: number, limit: number): {data: string[], count: number} {
    return {
      data: randomWordsData.slice(offset, offset + limit),
      count: randomWordsData.length,
    }
  }
}
