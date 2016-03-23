/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.heroEl = element(by.css('.hero-unit'));
  this.h1El = this.heroEl.element(by.css('h1'));
  this.pEl = this.heroEl.element(by.css('p'));
  this.imgEl = this.heroEl.element(by.css('img'));

  this.thumbEl = this.element(by.css('thumbnail'));
  this.thumbImgEl = this.thumbEl.element(by.css('img'));
  this.thumbH2El = this.thumbEl.element(by.css('h2'));
  this.thumbBtnEl = this.thumbEl.element(by.css('btn'));
};

module.exports = new MainPage();

