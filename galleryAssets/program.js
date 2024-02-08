/*The current page number*/
var page = 0;

/*The code below is for the Next button, adding to the page variable, and putting the image tag with the edited page source*/

function next() {
    
    var totClicks = ++page;
    var totClicksLast = totClicks -1;
	var totClicksNext = totClicks +1;
 	document.getElementById("3").innerHTML = '<img style="width:200px;" src="' + totClicksNext + '.png" width="142px">';
    document.getElementById("2").innerHTML = '<img style="width:450px;" src="' + totClicks + '.png" width="290px">';
    document.getElementById("1").innerHTML = '<img style="width:200px;" src="' + totClicksLast + '.png" width="142px">';
}

/*The code below is for the back button, reducing the page variable, and putting the image tag with the edited page source*/

function back() {

    var totClicks = --page;
    var totClicksLast = totClicks -1;
	var totClicksNext = totClicks +1;
 	document.getElementById("3").innerHTML = '<img style="width:200px;" src="' + totClicksNext + '.png" width="142px">';
    document.getElementById("2").innerHTML = '<img style="width:450px" src="' + totClicks + '.png" width="290px">';
    document.getElementById("1").innerHTML = '<img style="width:200px;" src="' + totClicksLast + '.png" width="142px">';
}


