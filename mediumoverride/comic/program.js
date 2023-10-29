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


