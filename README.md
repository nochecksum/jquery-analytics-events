# jquery-analytics-events
A simple jQuery plugin to track web page events and report to Google Analytics

## Features
Track clicks and other events through a simple jQuery plugin by using data attributes on your links and elements.

## Getting Started

* Download the jquery.analytics-events.js file from GitHub and put it into your project folder
* Include jQuery on your web page(s)
* Include Google Analytics tracking code on your web page(s)
* After jQuery and GA is loaded, include the plugin and instantiate it:

		<script src="/path/to/jquery.analytics-events.js"></script>
		<script>
			$('*[data-analytics]').eventify();
		</script>

* Now include a link on the page with data tags to start tracking:

		<a
			href="https://www.google.com/"
			data-analytics="true"
			data-analytics-action="click"
			data-analytics-category="Clickthrough"
			data-analytics-label="Google Search"
			data-analytics-value=5
		>
			Search Google
		</a>

For more information see the /demo/index.html page included in this repository

## Google Analytics
This plugin requires the newer Google Universal Analytics (analytics.js) code, and will not work with the old (ga.js) code. See [this document for upgrading to Universal Analytics](https://developers.google.com/analytics/devguides/collection/upgrade/).