import { browser, by, element } from 'protractor';

export class CashFlowPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cf-root h1')).getText();
  }
}
