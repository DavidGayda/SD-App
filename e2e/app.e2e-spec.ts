import { LillyProjectPage } from './app.po';

describe('lilly-project App', () => {
  let page: LillyProjectPage;

  beforeEach(() => {
    page = new LillyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
