Patient Privacy Notice Widget
===

This widget uses a combination of HTML, CSS, and javascript to create an interactive Notice of Privacy Practices for health plans and health care providers. It is based on the Model Notices of Privacy Practices developed jointly by the Office of the National Coordinator for Health Information Technology (ONC) and the Office for Civil Rights (OCR).  A demonstration of the widget integrated into a provider website is at: 
http://browsecareers.com/patientPrivacy/demo/programs.html
	
To add the widget to your site
- Go to Github at: https://github.com/pxb35/npp
- Click on "Download ZIP" and extract the files to your web site source folder. A subfolder will be created containing the scripts, "npp_script.js" and "npp_script_plan.js". 
- There are two different widgets, one for **health plans** and one for **health care providers**.  Insert one of the following lines into your site's HTML where you want the widget to appear. 

For **health plans**, insert:
```HTML
<script language="JavaScript" src="[folder you extracted to]/npp_script_plan.js"></script>
```
For **health care providers**, insert:
```HTML
<script language="JavaScript" src="[folder you extracted to]/npp_script.js"></script>
```

- With this line inserted, the widget will appear when the page is displayed. You may want to surround the script with a "span" or "div" to adjust margins / padding.
- There are several customatizations that should be made to tailor the content to your situation. These customizations are found in "customizations.xml" which can be edited with a text editor. Edit the file and save your changes. The widget will pull in the customizations when it runs. 
- Please note that there is also a Spanish version of the customizations, "customizations_es.xml" that should also be edited if you wish to support the Spanish version of the widget.

This widget has been successfully tested in the following environments:

| Windows 8, IE 10              | Windows 8, Opera 12.10        | Windows 8, FireFox 20     |
|:-----------------------------:|:-----------------------------:|:-------------------------:|
| **Windows 8, Chrome 27        | Windows 7, IE 10              | Windows 8, IE 9, 8, 7     |
| Windows 7, IE 8               | Windows 8, Firefox 18         | Windows XP, Chrome 25     |
| Windows 7 IE 9                | Windows 7, Opera 12.14        | Windows 7, Firefox 3.6    |
| Windows XP, IE 7              | Motorola Droid Razr           | LG Nexus 4                |
| Google Nexus 7, Android       | Samsung Galaxy S III, Android | Galaxy S II               |
| Droid Razor                   | Galaxy Note 2                 | OSX Mountain Lion, Safari |
| iPhone 4s, mobile Safari      | iPad 3, mobile Safari         | iPhone 5                  |
| OS X Snow Leopard, Safari 5.1 | OS X Mountain Lion, Chrome 26 | OS X Lion, Firefox 19     |
| iPad 3rd (6.0)                | iPhone 4S                     | Motorola Droid 2.2.3**    |
   
