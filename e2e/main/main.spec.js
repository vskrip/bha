'use strict';

var config = browser.params;

describe('Main View', function() {

	var page;

	beforeEach(function() {
		browser.get(config.baseUrl + '/');
		page = require('./main.po');
		footer = require('../components/footer/footer.po');
	});

	it('should include jumbotron with correct data', function() {
		expect(page.h1El.getText()).toBe('Bottom Hole Assemblies');
		expect(page.pEl.getText()).toBe('Web Application for BHA managment in the support process of drilling');
		expect(page.imgEl.getAttribute('src')).toMatch(/logo.png$/);
		expect(page.imgEl.getAttribute('alt')).toBe('BHA Logo');
	});
	
	it('should include thumbnail elements with information about services', function() {
		
		var listThumbImg = element.all(page.thumbImgEl);
		
		expect(listThumbImg.get(0).getAttribute('src')).toMatch(/project_pic.png$/);
		expect(listThumbImg.get(1).getAttribute('src')).toMatch(/bha_pic.png$/);
		expect(listThumbImg.get(2).getAttribute('src')).toMatch(/equipment_pic.png$/);
		expect(listThumbImg.get(3).getAttribute('src')).toMatch(/groups_pic.png$/);
		
		expect(listThumbImg.get(0).getAttribute('alt')).toBe('Project List Pic');
		expect(listThumbImg.get(1).getAttribute('alt')).toBe('BHA List Pic');
		expect(listThumbImg.get(2).getAttribute('alt')).toBe('Equipment Pic');
		expect(listThumbImg.get(3).getAttribute('alt')).toBe('Groups Pic');

		var listThumbH2 = element.all(page.thumbH2El);
		
		expect(listThumbH2.get(0).getText()).toBe('Project List');
		expect(listThumbH2.get(1).getText()).toBe('BHA List');
		expect(listThumbH2.get(2).getText()).toBe('Equipment');
		expect(listThumbH2.get(3).getText()).toBe('Groups');

		var listThumbBtn = element.all(page.thumbBtnEl);

		expect(listThumbBtn.get(0).getText()).toBe('Project List');
		expect(listThumbBtn.get(1).getText()).toBe('BHA List');
		expect(listThumbBtn.get(2).getText()).toBe('Equipment');
		expect(listThumbBtn.get(3).getText()).toBe('Groups');

	});
	
	it('should contain footer element with correct data', function() {
		expect(footer.footerCopy.getText()).toBe('Copyright ' + 0xA9 + ' Vladimir Skripachev');
		expect(footer.footerMenu.get(0).getText()).toBe('Home');
		expect(footer.footerMenu.get(1).getText()).toBe('About');
		expect(footer.footerMenu.get(2).getText()).toBe('Contact');
		expect(footer.footerEmail.getText()).toBe('vskrip33@gmail.com');
	});
});
