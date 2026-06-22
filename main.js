dateString = "Jun 29, 2026"

date = new Date
countDownDate = new Date(dateString).getTime();

var x = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("heading").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is finished, write some text
    if (distance < 0) 
    {
        clearInterval(x);
        document.getElementById("heading").innerHTML = "HAPPY BIRTHDAY JESS!";
        document.getElementById("button").style.visibility = "visible";
    }else
    {
        document.getElementById("button").style.visibility = "hidden";
    }
})

function birthday(){
    document.getElementById("img1").style.visibility = "visible";
    document.getElementById("img1").style.animation = "slideInFromRight 1s ease-in-out";
    document.getElementById("img2").style.visibility = "visible";
    document.getElementById("img2").style.animation="slideInFromLeft 1.2s ease-in-out";
    document.getElementById("img3").style.visibility="visible";
}