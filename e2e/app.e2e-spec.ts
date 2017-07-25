import { GridOutputPage } from './app.po';

describe('grid-output App', () => {
  let page: GridOutputPage;

  beforeEach(() => {
    page = new GridOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
