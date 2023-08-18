export const closeMock = jest.fn();
export const connectMock = jest.fn();
export const scrapeMock = jest.fn();

const ScraperServiceMock = jest.fn().mockImplementation(() => ({
  close: closeMock,
  connect: connectMock,
  scrape: scrapeMock,
}));

export default ScraperServiceMock;
