import { FrigoPage } from './app.po';

describe('frigo App', () => {
  let page: FrigoPage;

  beforeEach(() => {
    page = new FrigoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
