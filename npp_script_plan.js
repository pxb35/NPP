/*
*	JavaScript file to load iframe to contain Notice of Privacy Practices Widget 
*	- this is the health plan version
*
*	April 6, 2014 - Pete Brower
*/

// html to load
var filePath = 'npp_widget_plan.htm';

// get the script path
var path = "";
var scripts = document.getElementsByTagName("script"),
src = scripts[scripts.length-1].src;
var n = src.lastIndexOf("/");
if (n != -1) {
	path = src.substring(0,n+1);
}

// Setup the iframe target
iframe = '<iframe id="npp_frame" name="npp_widget" src ="" style="width:100%;height:100%;"></iframe>';

// Write the iframe to the page
document.write(iframe);
 
// modify frame characteristics
myIframe = document.getElementById("npp_frame");
myIframe.src = path + filePath;

// set the style of the iframe
myIframe.style.border = "1px solid #999";
myIframe.style.padding = "0px";
myIframe.style.overflowY = "scroll";

myIframe.onload = function() {
	
	// check the parents for a fixed height
	var newParent = myIframe.parentNode;
	var maxHeight = 0;
	while (newParent && !maxHeight) {
		if (newParent.style) {
			if (newParent.style.height != "" && newParent.style.height.toLowerCase().match(/px/)) {
				maxHeight = newParent.style.height;
			} else if (newParent.style.maxHeight != "" && newParent.style.maxHeight.toLowerCase().match(/px/)) {
				maxHeight = newParent.style.maxHeight;
			} else {
				newParent = newParent.parentNode;
			}
		} else {
			newParent = newParent.parentNode;
		}
	}
	
	// if a fixed height was found, use it, otherwise do a fixed ratio
	if (!maxHeight) {
		myIframe.style.height = parseInt(myIframe.offsetWidth * 3/4) + "px";
	} else {
		myIframe.style.height = maxHeight;
	} 

};