'use strict';

var config = browser.params;

describe('Main View', function() {

	var page;
	var footer;

	beforeEach(function() {
		browser.get(config.baseUrl + '/');
		page = require('./main.po');
		footer = require('../components/footer/footer.po');
	});

	it('should include jumbotron with correct data', function() {
		expect(page.h1El.getText()).toBe('Bottom Hole Assemblies');
		expect(page.pEl.getText()).toBe('Web Application for BHA management in the support process of drilling');
		expect(page.imgEl.getAttribute('src')).toMatch(/logo.png$/);
		expect(page.imgEl.getAttribute('alt')).toBe('BHA Logo');
	});

	/*
		TODO Need refactoring
	*/
	it('should include thumbnail elements with information about services', function() {
		
		element.all(by.css('.thumbnail img')).then(function(items) {
		  expect(items.length).toBe(4);
		  expect(items[0].getAttribute('src')).toMatch(/project_pic.png$/);
		  expect(items[1].getAttribute('src')).toMatch(/bha_pic.png$/);
		  expect(items[2].getAttribute('src')).toMatch(/equipment_pic.png$/);
		  expect(items[3].getAttribute('src')).toMatch(/groups_pic.png$/);

		  expect(items[0].getAttribute('alt')).toMatch('Project List Pic');
		  expect(items[1].getAttribute('alt')).toMatch('BHA List Pic');
		  expect(items[2].getAttribute('alt')).toMatch('Equipment Pic');
		  expect(items[3].getAttribute('alt')).toMatch('Groups Pic');
		});

		element.all(by.css('.thumbnail h3')).then(function(items) {
		  expect(items.length).toBe(4);
		  expect(items[0].getText()).toBe('Project List');
		  expect(items[1].getText()).toBe('BHA List');
		  expect(items[2].getText()).toBe('Equipment');
		  expect(items[3].getText()).toBe('Groups');
		});

		element.all(by.css('.thumbnail .btn')).then(function(items) {
		  expect(items.length).toBe(4);
		  expect(items[0].getText()).toBe('Project List');
		  expect(items[1].getText()).toBe('BHA List');
		  expect(items[2].getText()).toBe('Equipment');
		  expect(items[3].getText()).toBe('Groups');
		});
	});
	
	it('should contain footer element with correct data', function() {
		expect(footer.footerCopy.getText()).toBe('Copyright ' + '\u00A9' + ' Vladimir Skripachev');
		expect(footer.footerMenu.getText()).toBe('Home | About | Contact');
		expect(footer.footerEmail.getText()).toBe('vskrip33@gmail.com');
	});
});
