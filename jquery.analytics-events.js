/*
* @fileOverview Analytics Events - jQuery Plugin
* @version 1.0.0
*
* @author Alex Teugels http://www.github.com/xigco
* @see https://github.com/xigco/jquery-analytics-events
*
* Copyright (c) 2015 Alex Teugels
* See LICENSE for licensing information
*
*/

(function( $ ) {
    $.fn.eventify = function() {
    	if (typeof(ga) === 'undefined') {
    		console.log('Google Analytics is not instantiated yet - check you have the GA code loading before this plugin');
    		return false;
    	}

		return this.each(function() {
			var aeCategory = $(this).data('analytics-category'),
				aeAction = $(this).data('analytics-action'),
				aeLabel = $(this).data('analytics-label'),
				aeValue = $(this).data('analytics-value');

			if ($(this).prop('tagName')=='A' && aeAction=='click'){
				$(this).on(
					aeAction,
					function(event){
						event.preventDefault();
						$.fn.aeBlockingTrack(aeCategory,aeAction,aeLabel,aeValue,$(this).attr('href'));
					}
				);
			}else{
				$(this).on(
					aeAction,
					function(){
						$.fn.aeSimpleTrack(aeCategory,aeAction,aeLabel,aeValue);
					}
				);
			}
		});
    };

    $.fn.aeBlockingTrack = function(aeCategory,aeAction,aeLabel,aeValue,url) {
		//console.log( 'Blocking event data: ' + [aeCategory,aeAction,aeLabel,aeValue] );
		ga('send', 'event', aeCategory, aeAction, aeLabel, {'hitCallback':function(){
			//console.log( 'Blocking data callback: ' + url );
			document.location = url;
		}});
    };

    $.fn.aeSimpleTrack = function(aeCategory,aeAction,aeLabel,aeValue) {
		//console.log( 'Simple event data: ' + [aeCategory,aeAction,aeLabel,aeValue] );
		ga('send', 'event', aeCategory, aeAction, aeLabel);
    };
}( jQuery ));