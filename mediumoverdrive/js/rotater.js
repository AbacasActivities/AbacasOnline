var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];

var imgcol = myScript.src.replace(/^[^\?]+\??/,'');

var headerimg;
if (imgcol=='white'){
headerimg='<a href="https://aradiacollective.com/webring.php"><img src="https://aradiacollective.com/images/webring/header1.png" alt="A Group" title="Bewitching Witches"></a>';
}
else if (imgcol=='black'){
headerimg='<a href="https://aradiacollective.com/webring.php"><img src="https://aradiacollective.com/images/webring/header2.png" alt="A Group" title="Bewitching Witches"></a>';}

//to add members: Copy a line for memberImg[#], and edit as needed.
//to delete members: remove the member in question, make sure the rest of the numbers are in numerical order.
//Numbers MUST be in order and must increment starting at 0 for this array.
var memberImg = new Array();
memberImg[0] = '<a href="https://electricrosecomic.com/"><img src="https://shooting-stars.org/tutorials/rotator/imgs/2.png" alt="The Electric Rose"></a>';
memberImg[1] = '<a href="https://saffronwave.cfw.me/"><img src="/images/webring/saffron.png" alt="Saffron Wave"></a>';
memberImg[2] = '<a href="https://minnieandmax.thecomicseries.com"><img src="/images/webring/minniemax.jpg" alt="Minnie and Max"></a>';
memberImg[3] = '<a href="http://www.abacasonline.com/mediumoverdrive"><img src="/images/webring/mediumoverdrive.png" alt="Medium Overdrive"></a>';

//This does the random picking on each load of the script.
var randomObjNum = Math.floor(Math.random()*memberImg.length);

document.write('<div class="RotatorScript" style="line-height:0; width: 165px; display: inline-block;">',headerimg,'<br>',memberImg[randomObjNum],'</div>');