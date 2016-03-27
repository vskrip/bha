/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var FooterComponent = function() {
	this.footer = element(by.css('.footer'));
	this.footerCopy = this.footer.element(by.css('.footer-copy'));
	this.footerMenu = this.footer.element(by.css('.footer-menu'));
	this.footerEmail = this.footer.element(by.css('.footer-email'));	
};

module.exports = new FooterComponent();

