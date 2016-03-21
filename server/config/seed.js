/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Project from '../api/project/project.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
	
Project.find({}).remove()
  .then(() => {
    Project.create({
      field: 'Labaganskoe',
      site: '5A',
      well: '42848',
      customer: 'RN - Burenie',
			jobNumber: '',
			startDate: '10/05/2015',
			finishDate: '11/07/2015',
			isCurrent: false,
			tenant: 'test@example.com'
    }, {
      field: 'Vstrechnoe',
      site: '1',
      well: '345',
      customer: 'ERIELL',
			jobNumber: '',
			startDate: '12/03/2015',
			finishDate: '01/06/2016',
			isCurrent: false,
			tenant: 'test@example.com'
    }, {
      field: 'Priobskoe',
      site: '336',
      well: '3087',
      customer: 'ERIELL',
			jobNumber: '',
			startDate: '02/04/2016',
			finishDate: '',
			isCurrent: true,
			tenant: 'test@example.com'
    })
    .then(() => {
      console.log('finished populating projects');
    });
  });