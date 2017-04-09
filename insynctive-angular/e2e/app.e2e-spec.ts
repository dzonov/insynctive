import { InsynctiveAngularPage } from './app.po';

describe('insynctive-angular App', () => {
  let page: InsynctiveAngularPage;

  beforeEach(() => {
    page = new InsynctiveAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
