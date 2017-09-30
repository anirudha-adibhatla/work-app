import { WorkAppPage } from './app.po';

describe('work-app App', () => {
  let page: WorkAppPage;

  beforeEach(() => {
    page = new WorkAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
