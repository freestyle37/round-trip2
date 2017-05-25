$(document).ready(function() {

	$(".block-config-provider--rn-user").on('click',function() {
		$(".block-config-provider--rn-user .block__inner .block__content .user-blocks").toggle(); /*shesterenka*/
		$(".block-config-provider--rn-user .block__inner .block__content .user-blocks").css("z-index","5");
		//$("#block-userblock::after").toggle();

	});

	$(".open-ticket.ticket-trigger span.label-open").on('click',function() {
		$(".leg-info-wrapper .leg-info-body").show();
		$(".open-ticket.ticket-trigger span.label-open").hide();
		$(".open-ticket.ticket-trigger span.label-close").show();
		$(".open-ticket.ticket-trigger::before").css("transform","rotate(30deg)");
		$(".open-ticket.ticket-trigger::after").css("transform","rotate(100deg)");
	});

	$(".open-ticket.ticket-trigger span.label-close").on('click',function() {
		$(".leg-info-wrapper .leg-info-body").hide();
		$(".open-ticket.ticket-trigger span.label-close").hide();
		$(".open-ticket.ticket-trigger span.label-open").show();
	});


		
	$(".block-plugin-id--footer-icons .block__content>.tel").on('click',function() {
		$(".pr-footer__footer .footer-tel").show();
	});
	$(".pr-footer__footer .footer-tel .block__content .footer-arrow").on('click',function() {
		$(".pr-footer__footer .footer-tel").hide("slow");
	});


	$(".block-plugin-id--footer-icons .block__content>.mail").on('click',function() {
		$(".pr-footer__footer .footerlanguage").slideDown();
	});


	$(".block-plugin-id--footer-icons .block__content>.lang").on('click',function() {
		$(".pr-footer__footer .footerlanguage").show();
	});
	
	$(".pr-footer__footer .footerlanguage .block__content .footer-arrow").on('click',function() {
		$(".pr-footer__footer .footerlanguage").hide("slow");
	});










}); 