'use strict';

var config = browser.params;

describe('Main View', function() {
	var page;

	beforeEach(function() {
		browser.get(config.baseUrl + '/');
		page = require('./main.po');
	});

	it('should include jumbotron with correct data', function() {
		expect(page.h1El.getText()).toBe('Bottom Hole Assemblies');
		expect(page.pEl.getText()).toBe('Web Application for BHA managment in the support process of drilling.');
		expect(page.imgEl.getAttribute('src')).toMatch(/logo.png$/);
		expect(page.imgEl.getAttribute('alt')).toBe('BHA Logo');
	});
});
