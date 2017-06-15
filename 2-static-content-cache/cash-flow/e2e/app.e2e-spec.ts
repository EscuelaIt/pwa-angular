import { CashFlowPage } from './app.po';

describe('cash-flow App', () => {
  let page: CashFlowPage;

  beforeEach(() => {
    page = new CashFlowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cf!!');
  });
});
