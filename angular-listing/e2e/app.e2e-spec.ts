import { AngularListingPage } from './app.po';

describe('angular-listing App', () => {
  let page: AngularListingPage;

  beforeEach(() => {
    page = new AngularListingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
