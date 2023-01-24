//for mobile view get scroll positin on top
var prevScrollpos = window.pageYOffset;

// Get the navbar
var navbar = document.getElementById("socialmenu");
var menubar = document.getElementById("menustick");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var stickbottom = menubar.offsetHeight;
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
        $('.middlepart1').css('height','100vh')

        // stickbottom = navbar.offsetHeight
        // console.log(stickbottom)
        $('.aboutsection').css('margin-top',String(stickbottom+50)+'px')

        
    }
    else{
      var currentScrollPos = window.pageYOffset;
      if(currentScrollPos<100){
        document.getElementById("menustick").style.position = "fixed"
        document.getElementById("menustick").style.top = "0"
        $('.aboutsection').css('margin-top',String(stickbottom+15)+'px')
      }
      else{
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("menustick").style.position = "fixed"
          document.getElementById("menustick").style.top = "0"
          $('.aboutsection').css('margin-top',String(stickbottom+15)+'px')
          
        } else {
            document.getElementById("menustick").style.top = "-12vh"
        }
      }
      prevScrollpos = currentScrollPos
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



