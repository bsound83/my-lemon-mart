import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "LemonMart" at App Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('LemonMart');
  });
});
