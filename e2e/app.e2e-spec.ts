import { Angular4FeaturesV2Page } from './app.po';

describe('angular4-features-v2 App', () => {
  let page: Angular4FeaturesV2Page;

  beforeEach(() => {
    page = new Angular4FeaturesV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
