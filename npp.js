/*
*	JavaScript file to support Notice of Privacy Practices Widget
*	April 6, 2014 - Pete Brower
*/

//
// globals
//
var glob_scroll_position;

//
// *************** document ready ********************
//

$(document).ready(function() {
	load_customizations();
});

function change_language(file) {
	window.location.href = file;
}

function go_back(page) {
	
	// queue up scroll 
	$("#"+page).one( "pageshow", function( event ) {
		$.mobile.silentScroll(glob_scroll_position);
		//$("html, body").animate({ "scrollTop" : glob_scroll_position }, 500);
	});
	$.mobile.changePage("#"+page,{ transition: "none"});
}

function load_customizations() {
	
	// english or spanish xml file to load
	var cfile;
	if (glob_language == "es") {
		cfile = "customization_es.xml"
	} else {
		cfile = "customization.xml"
	}
	
	$("#customization_xml").load(cfile,function(responseText, textStatus, XMLHttpRequest){
		var xml = responseText;
		
		// for IE8, need to process differently
		if (navigator.userAgent.toLowerCase().match(/msie/)) {
			
			xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
			xmlDoc.async = 'false';
			xmlDoc.loadXML(xml);
			
			$(".entity_name").html(xmlDoc.getElementsByTagName("entity_name")[0].text);
			$(".entity_address").html(xmlDoc.getElementsByTagName("entity_address")[0].text);
			$(".entity_website").html(xmlDoc.getElementsByTagName("entity_website")[0].text);
			$(".entity_website_src").attr("onclick","window.open('"+xmlDoc.getElementsByTagName("entity_website")[0].text+"');");
			$(".privacy_official_name").html(xmlDoc.getElementsByTagName("privacy_official_name")[0].text);
			$(".privacy_official_phone").html(xmlDoc.getElementsByTagName("privacy_official_phone")[0].text);
			$(".privacy_official_email").html(xmlDoc.getElementsByTagName("privacy_official_email")[0].text);
			
			if (xmlDoc.getElementsByTagName("special_notes")[0].text != "") {
				$(".special_notes").html("<p><b>" + $("#note_text").attr("value") + "</b>" + xmlDoc.getElementsByTagName("special_notes")[0].text + "</p>");
			}
			if (xmlDoc.getElementsByTagName("other_limits")[0].text != "") {
				$(".other_limits").html("<p><b>" + $("#other_limits").attr("value") + "</b>" + xmlDoc.getElementsByTagName("other_limits")[0].text + "</p>");
			}
			if (xmlDoc.getElementsByTagName("blue_button")[0].text != "") {
				$(".blue_button").html("<p>" + xmlDoc.getElementsByTagName("blue_button")[0].text + "</p>");
			}
			if (xmlDoc.getElementsByTagName("effective_date")[0].text != "") {
				$(".effective_date").html("<br /><p><i>" + $("#effective_date").attr("value") + xmlDoc.getElementsByTagName("effective_date")[0].text + "</i></p>");
			}
			if (xmlDoc.getElementsByTagName("ohca_sharing")[0].text != "") {
				$(".ohca_sharing").html("<br /><p><b>" + xmlDoc.getElementsByTagName("ohca_sharing")[0].text + "</b></p>");
			}
			
			// check on spanish version
			if (xmlDoc.getElementsByTagName("spanish_version")[0].text == "off") {
				$(".language_button").hide();
			}
		} else {
			$(".entity_name").html($(xml).find("entity_name").text());
			$(".entity_address").html($(xml).find("entity_address").text());
			$(".entity_website").html($(xml).find("entity_website").text());
			$(".entity_website_src").attr("onclick","window.open('"+$(xml).find("entity_website").text()+"');");
			$(".privacy_official_name").html($(xml).find("privacy_official_name").text());
			$(".privacy_official_phone").html($(xml).find("privacy_official_phone").text());
			$(".privacy_official_email").html($(xml).find("privacy_official_email").text());
			
			if ($(xml).find("special_notes").text() != "") {
				$(".special_notes").html("<p><b>" + $("#note_text").attr("value") + "</b>" + $(xml).find("special_notes").text() + "</p>");
			}
			if ($(xml).find("other_limits").text() != "") {
				$(".other_limits").html("<p><b>" + $("#other_limits").attr("value") + "</b>" + $(xml).find("other_limits").text() + "</p>");
			}
			if ($(xml).find("blue_button").text() != "") {
				$(".blue_button").html("<p>" + $(xml).find("blue_button").text() + "</p>");
			}
			if ($(xml).find("effective_date").text() != "") {
				$(".effective_date").html("<br /><p><i>" + $("#effective_date").attr("value") + $(xml).find("effective_date").text() + "</i></p>");
			}
			if ($(xml).find("ohca_sharing").text() != "") {
				$(".ohca_sharing").html("<br /><p><b>" + $(xml).find("ohca_sharing").text() + "</b></p>");
			}
			
			// check on spanish version
			if ($(xml).find("spanish_version").text() == "off") {
				$(".language_button").hide();
			}
		}
	});
}

function more_detail(close,section) {
	if (close) {
		$("."+section+"_summary_list").hide();
		$("#"+section+"_more").show();
	} else {
		$("."+section+"_summary_list").show();
		$("#"+section+"_more").hide();
	}
}

function scroll_to_id_with_hdr(id,hdr) {
	//$.mobile.silentScroll($("#"+id).offset().top - $("#"+hdr).height());
	$("html, body").animate({ "scrollTop" : $("#"+id).offset().top - $("#"+hdr).height() }, 500);
}

function show_details(page,section) {
	// save scroll position
	glob_scroll_position = $(window).scrollTop();
	$("#"+page).one( "pageshow", function( event ) {
		if (section != "") {
			scroll_to_id_with_hdr(section,page+"_header");
		}
	});
	$.mobile.changePage("#"+page,{ transition: "none"});
}