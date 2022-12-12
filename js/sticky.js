// Get the navbar
var navbar = document.getElementById("socialmenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky)

var targetWidth= 576

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    if ( document.body.clientWidth >=  targetWidth ) {     
        //Add your javascript for screens wider than or equal to 768 here
        
        document.querySelector('#menustick').classList.add('sticky')
        $('.blankdiv .logo3').css('display','block')
        $('.menubar .logo1').css('display','none')
        //$('.menubar .menusocial .blankdiv').css('display','none')
        $('.middlepart1').css('height','fit-content')


        console.log("henry in the building")

    }
    
    
  } else {
    if ( document.body.clientWidth >=  targetWidth ) { 
        document.querySelector('#menustick').classList.remove('sticky')
        console.log("henry is really out of the building")
        $('.menubar .logo3').css('display','none')
        $('.menubar .logo1').css('display','block')
        $('.middlepart1').css('height','100vh')
        //$('.menubar .menusocial .blankdiv').css('display','block')
        //$('.menubar').css('flex-direction','column')
    }
  }
}



