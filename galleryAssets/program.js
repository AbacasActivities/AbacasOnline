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
	
	if(totClicks == -1) {
		document.getElementById("description").innerHTML = 'A business woman which I may make into an actual character later down the line.';
	}
	
	if(totClicks == 0) {
		document.getElementById("description").innerHTML = 'The first color rendition of Daisy from my manga fully transformed I actually liked.';
	}
	
	if(totClicks == 1) {
		document.getElementById("description").innerHTML = 'A sketch of an outfit I found online. I improvised the head, as I felt leaving the figure headless was weird.';
	}
}

/*The code below is for the back button, reducing the page variable, and putting the image tag with the edited page source*/

function back() {

    var totClicks = --page;
    var totClicksLast = totClicks -1;
	var totClicksNext = totClicks +1;
 	document.getElementById("3").innerHTML = '<img style="width:200px;" src="' + totClicksNext + '.png" width="142px">';
    document.getElementById("2").innerHTML = '<img style="width:450px" src="' + totClicks + '.png" width="290px">';
    document.getElementById("1").innerHTML = '<img style="width:200px;" src="' + totClicksLast + '.png" width="142px">';
	
	if(totClicks == -1) {
		document.getElementById("description").innerHTML = 'A business woman which I may make into an actual character later down the line.';
	}
	
	if(totClicks == 0) {
		document.getElementById("description").innerHTML = 'The first color rendition of Daisy from my manga fully transformed I actually liked.';
	}
	
	if(totClicks == 1) {
		document.getElementById("description").innerHTML = 'A sketch of an outfit I found online. I improvised the head, as I felt leaving the figure headless was weird.';
	}
}



