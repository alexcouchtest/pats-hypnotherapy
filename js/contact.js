$(document).ready(function(){
	var contactlinks = $(".contact-links");
	var contactinfo = $(".contact-info");
	var emaillink = $(".email-link");
	var email = $(".email");
	var numberlink = $(".number-link");
	var number = $(".number");
	contactinfo.hide();
	email.hide();
	number.hide();
	$(contactlinks).click(function(){
		$(contactinfo).toggle(300);
	});
	$(emaillink).click(function(){
		$(email).toggle(300);
	});
	$(numberlink).click(function(){
		$(number).toggle(300);
	});
});