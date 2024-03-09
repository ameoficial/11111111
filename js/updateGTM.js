	var updateData = {"visitorLoginState":"No","visitorId":"4k12t5c75thd065jtukjeq4004","visitorSessionID":"4k12t5c75thd065jtukjeq4004","visitorType":"new customer","visitorLifetimeValue":0};

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
