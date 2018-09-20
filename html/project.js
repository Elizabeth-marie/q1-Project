document.addEventListener("DOMContentLoaded", function() {

console.log("here!")


//parallax initialization
var elems = document.querySelectorAll('.parallax');
var instances = M.Parallax.init(elems)

//mobile nav bar initialization
var elem2 = document.querySelectorAll('.sidenav');
var instances3 = M.Sidenav.init(elem2)

})
