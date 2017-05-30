import { SampleAppNg2Page } from './app.po';

describe('sample-app-angular App', function() {
  let page: SampleAppNg2Page;

  beforeEach(() => {
    page = new SampleAppNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
