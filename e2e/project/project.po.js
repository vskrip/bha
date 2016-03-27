/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ProjectPage = function() {
  this.projTab = element(by.css('.projects-table'));
  this.projTabTh = this.projTab.element(by.css('th'));
  this.projeTabTd = this.projTab.element(by.css('td'));
};

module.exports = new ProjectPage();

