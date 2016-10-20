import { CruddemoarrPage } from './app.po';

describe('cruddemoarr App', function() {
  let page: CruddemoarrPage;

  beforeEach(() => {
    page = new CruddemoarrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
