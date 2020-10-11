/*global app, Router */

const { default: router } = require("../router");

(function (app, router) {

	'use strict';

	var router = new router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app.visibility = 'all';
		}
	});

	router.init();

})(app, router);
