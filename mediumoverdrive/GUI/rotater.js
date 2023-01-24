var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];

var imgcol = myScript.src.replace(/^[^\?]+\??/,'');

var headerimg;
if (imgcol=='white'){
headerimg='<a href="COLLECTIVE_HOMEPAGE_ADDRESS"><img src="ROTATOR_HEADER_IMAGE_COLOR1.PNG" alt="COLLECTIVE_NAME" title="COLLECTIVE_NAME"></a>';
}
else if (imgcol=='black'){
headerimg='<a href="COLLECTIVE_HOMEPAGE_ADDRESS"><img src="ROTATOR_HEADER_IMAGE_COLOR2.PNG" alt="COLLECTIVE_NAME" title="COLLECTIVE_NAME"></a>';
}

//to add members: Copy a line for memberImg[#], and edit as needed.
//to delete members: remove the member in question, make sure the rest of the numbers are in numerical order.
//Numbers MUST be in order and must increment starting at 0 for this array.
var memberImg = new Array();
memberImg[0] = '<a href="MEMBER_URL_1"><img src="FULL_URL_TO_IMAGE.PNG" alt="ALT TEXT HERE"></a>';
memberImg[1] = '<a href="MEMBER_URL_2"><img src="FULL_URL_TO_IMAGE.PNG" alt="ALT TEXT HERE"></a>';

//This does the random picking on each load of the script.
var randomObjNum = Math.floor(Math.random()*memberImg.length);

document.write('<div class="RotatorScript" style="line-height:0; width: 165px; display: inline-block;">',headerimg,'<br>',memberImg[randomObjNum],'</div>');
