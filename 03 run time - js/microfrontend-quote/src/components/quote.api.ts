export interface QuoteType {
  body: string;
  author: string;
}

export const getQuote = (): Promise<QuoteType> =>
  fetch("https://favqs.com/api/qotd")
    .then(result => result.json())
    .then(result => result.quote);
