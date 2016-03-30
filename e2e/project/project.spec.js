'use strict';

var config = browser.params;
var UserModel = require(config.serverConfig.root + '/server/api/user/user.model');
var ProjectModel = require(config.serverConfig.root + '/server/api/project/project.model');

describe('Project List Page', function() {
	
	var loginPage;
	var page;
	
	it('should redirect to "/login" if user is not authorised', function() {
    browser.get(config.baseUrl + '/projects');
    expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/login');
	});

	describe('Under authorised access', function() {

	  var loadLoginPage = function() {
	    browser.get(config.baseUrl + '/login');
	    loginPage = require('../account/login/login.po');
			page = require('./project.po');
	  };

	  var testUser = {
	    name: 'Test User',
	    email: 'test@example.com',
	    password: 'test'
	  };		

		beforeEach(function(done) {
		  UserModel.remove()
		    .then(function() {
		      return UserModel.create(testUser)
		        .then(loadLoginPage);
		    })
		    // .then(loadLoginPage)
		    .finally(function() {
		      browser.wait(function() {
		        //console.log('waiting for angular...');
		        return browser.executeScript('return !!window.angular');

		      }, 5000).then(done);
		    });
		});

		it('should contain information about current project', function() {
      loginPage.login(testUser);
			browser.setLocation('/projects');
			expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/projects');

			expect(page.projCurrent.getText()).toBe('Current project is not selected.');

		});

		it('should contain alert if list of projects is empty', function() {
      loginPage.login(testUser);
			browser.setLocation('/projects');
			expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/projects');

			expect(page.projTab.isDisplayed()).toBe(false);
			expect(page.projEmpty.isDisplayed()).toBe(true);
			expect(page.projEmpty.getText()).toBe('The list of projects are empty.');

		});

		it('should contain table with fields and action buttons', function() {
      loginPage.login(testUser);
			browser.setLocation('/projects');			
	    expect(browser.getCurrentUrl()).toBe(config.baseUrl + '/projects');
			
			expect(page.projTab.isDisplayed()).toBe(true);
			expect(page.projEmpty.isDisplayed()).toBe(false);
			
			element.all(by.css('.projects-table th')).then(function(items) {
			  expect(items.length).toBe(5);
			  expect(items[0].getText()).toBe('Field');
			  expect(items[1].getText()).toBe('Site');
			  expect(items[2].getText()).toBe('Well');
			});

		});

	});
});
