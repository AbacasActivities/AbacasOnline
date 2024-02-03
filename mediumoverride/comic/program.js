/*The current page number*/
var page = 0;

/*The code below is for the Next button, adding to the page variable, and putting the image tag with the edited page source*/

function pagenumber() {
    
    var totClicks = ++page;
    var totClicksLast = totClicks -1;
    document.getElementById("page").innerHTML = '<img height="450" width="300px" src="comic/p' + totClicks + '.png">';
    document.getElementById("pagelast").innerHTML = '<img height="450" width="300px" src="comic/p' + totClicksLast + '.png">';
}

/*The code below is for the back button, reducing the page variable, and putting the image tag with the edited page source*/

function pagenumber1() {

    var totClicks = --page;
    var totClicksLast = totClicks -1;
    document.getElementById("page").innerHTML = '<img height="450" width="300px" src="comic/p' + totClicks + '.png">';
    document.getElementById("pagelast").innerHTML = '<img height="450" width="300px" src="comic/p' + totClicksLast + '.png">';
}

/*full screen and exit full screen function*/

var screen = 0;

function screenfull() {
    document.getElementById("body").innerHTML = '<div class="viewer" style="margin:auto;width:1190;height:842px;"><div id="pagelast" style="float:right;"><img src="comic/p-1.png"></div><div id="page" style="float:left"><img  src="comic/p0.png"></div><div class="nav"><button class="Back" id="Back" onclick="pagenumber3()" style="float:right;width:50%;height:40px">Back</button><button class="Next" id="Next" onclick="pagenumber2()" style="float:left;width:50%;;height:40px">Next</button></div><script src="program.js"></script></div><button class="fullscreen" id="Next" onclick="screenfullexit()" style="float:right;width:60px;height:40px; margin-top:10px">Full Screen</button>';
	
}

function screenfullexit() {  
    document.getElementById("body").innerHTML = '<!-- ####### HEY, I AM THE BODY START!! #########--><div class="containor" style="height:762px"><div class="sidebar"><div class="button" style="margin-top:10px;border-radius:6px 0 0 0;"><a href="../index.htm"><img src="../webAssets/home.png">&nbsp;Home</a></div><div class="button"><a href="../about.htm"><img src="../webAssets/about.png">&nbsp;About</a></div><div class="button"><a href="../story.htm"><img src="../webAssets/story.png">&nbsp;Story</a></div><div class="buttonp"><a href="../comic/Viewer.htm"><img src="../webAssets/manga.png">&nbsp;Manga</a></div><div class="button"><a href="../defense.htm"><img src="../webAssets/defense.png">&nbsp;Defense</a></div><div class="button"><a href="mailto:maurageorge2006@hotmail.com"><img src="../webAssets/comments.png">&nbsp;Comments</a></div><div class="button" style="margin-bottom:10px;border-radius:0 0 0 6px;"><a href="../directory.htm"><img src="../webAssets/directory.png">&nbsp;Directory</a></div></div><div class="body2" style="height:756px;"><div class="header" ><h1 style="margin-left:20px;text-shadow: 3px 3px 4px black;color:white;width:500px">Medium Override Reader</h1><img style="float:right;margin:10px" src="../webAssets/logoSmall.svg"></div><div class="contentbox"><div class="viewer"><div id="pagelast" style="float:right;width:300px;height:450px;margin:0;"><img height="450" width="300px" src="comic/p-1.png"></div><div id="page" style="float:left"><img height="450" width="300px" src="comic/p0.png"></div><div class="nav"><button class="Back" id="Back" onclick="pagenumber1()" style="float:right;width:300px;">Back</button><button class="Next" id="Next" onclick="pagenumber()" style="float:left;width:300px;">Next</button></div><script src="program.js"></script></div><button class="fullscreen" id="Next" onclick="screenfull()" style="float:right;width:60px;height:40px; margin-top:10px">Full Screen</button></div><div class="footer">Copyright &copy; 2023. Medium Override from <a href="../index.htm">AbacasOnline</a>. All rights reserved.</div>';
	
}

function pagenumber2() {
    
    var totClicks = ++page;
    var totClicksLast = totClicks -1;
    document.getElementById("page").innerHTML = '<img width="595" height="842" src="comic/p' + totClicks + '.png">';
    document.getElementById("pagelast").innerHTML = '<img width="595" height="842" src="comic/p' + totClicksLast + '.png">';
}

function pagenumber3() {

    var totClicks = --page;
    var totClicksLast = totClicks -1;
    document.getElementById("page").innerHTML = '<img width="595" height="842" src="comic/p' + totClicks + '.png">';
    document.getElementById("pagelast").innerHTML = '<img width="595" height="842"  src="comic/p' + totClicksLast + '.png">';
}


