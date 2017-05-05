import { RagzzaPage } from './app.po';

describe('ragzza App', () => {
  let page: RagzzaPage;

  beforeEach(() => {
    page = new RagzzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
