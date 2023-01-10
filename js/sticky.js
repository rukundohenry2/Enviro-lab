// Get the navbar
var navbar = document.getElementById("socialmenu");
var menubar = document.getElementById("menustick");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var stickbottom = menubar.offsetHeight+50;
console.log(stickbottom)
//console.log(sticky)

var targetWidth= 768


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if ((window.pageYOffset) >= sticky) {
    if ( document.body.clientWidth >=  targetWidth ) {     
        //Add your javascript for screens wider than or equal to 768 heres
        document.querySelector('#menustick').classList.add('sticky')
        $('.blankdiv .logo3').css('display','block')
        $('.menubar .logo1').css('display','none')
        $('.middlepart1').css('height','fit-content')

        // stickbottom = navbar.offsetHeight
        // console.log(stickbottom)
        $('.aboutsection').css('margin-top',String(stickbottom)+'px')
    }
    
    
  } else {
    if ( document.body.clientWidth >=  targetWidth ){ 
        document.querySelector('#menustick').classList.remove('sticky')
        $('.menubar .logo3').css('display','none')
        $('.menubar .logo1').css('display','block')
        $('.middlepart1').css('height','100vh')
        $('.aboutsection').css('margin-top','20px')
    }
  }
}



