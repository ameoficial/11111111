	var updateData = {"visitorLoginState":"No","visitorId":"uhaj0a6a8c1h324rd4nh48dug2","visitorSessionID":"uhaj0a6a8c1h324rd4nh48dug2","visitorType":"new customer","visitorLifetimeValue":0};

window.onload = function() {
	var eventObj = {
	"event": "tray.updateGTM"
	};
	updateData = jQuery.extend(updateData, {
		"siteSearchFrom": document.referrer
	});
	dataLayer.push(jQuery.extend(eventObj, updateData));

	console.info('[DataLayer] UpdateGTM executed.')
};
