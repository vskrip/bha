'use strict';

var config = browser.params;
var PrpjectModel = require(config.serverConfig.root + '/server/api/project/project.model');

describe('Project List Page', function() {

	var page;

	beforeEach(function() {
		browser.get(config.baseUrl + '/projects');
		page = require('./project.po');
	});

	it('should be availiable only for an authorised user, redirect to "/login"', function() {
    expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/login');
	});

	it('should contain table with fields and action buttons', function() {
		
		// browser.get(config.baseUrl + '/projects');
		//     expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/projects');
		
	});

	it('should contain Add Project button', function() {
		
	});

	it('should contain information about current project', function() {
		
	});

});
