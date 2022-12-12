// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("menuitems");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
function windowwidth(){
    var targetWidth = $(window).width()
    console.log(targetWidth)
}


// if ( $(window).width() &gt;= targetWidth) {     
//   //Add your javascript for screens wider than or equal to 768 here
// }
// else {
//   //Add your javascript for screens smaller than 768 here
// }