import { PtfcPage } from './app.po';

describe('ptfc App', () => {
  let page: PtfcPage;

  beforeEach(() => {
    page = new PtfcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
