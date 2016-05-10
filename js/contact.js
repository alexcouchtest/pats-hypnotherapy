$(document).ready(function(){
	var contactlinks = ".contact-links";
	var contactinfo = ".contact-info";
	var emaillink = ".email-link";
	var email = ".email";
	var numberlink = ".number-link";
	var number = ".number";
	var apptlink = ".email-link-apntmnt";
	var appt = ".appt";
	var infolink = ".email-link-info";
	var info = ".info";
	$(contactinfo).hide();
	$(email).hide();
	$(number).hide();
	$(appt).hide();
	$(info).hide();
	$(contactlinks).click(function(){
		$(contactinfo).toggle(300);
	});
	$(emaillink).click(function(){
		$(email).toggle(300);
	});
	$(numberlink).click(function(){
		$(number).toggle(300);
	});
	$(apptlink).click(function(){
		$(appt).toggle(300);
	});
	$(infolink).click(function(){
		$(info).toggle(300);
	});
});
