let sections = document.querySelectorAll('section');
let navLinks1 = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks1.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ']'.classList.add('active'))
            })
        }
    })
}

// https://stackoverflow.com/questions/24026898/how-to-send-an-email-using-only-html5-and-css
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',contact,false);
function contact(e) {
    // Prevent Default Form Submission
    e.preventDefault();

    var target = e.target || e.srcElement;
    var i = 0;
    var message = '';

    // Loop Through All Input Fields
    for(i = 0; i < target.length; ++i) {
        // Check to make sure it's a value. Don't need to include Buttons
        if(target[i].type != 'text' && target[i].type != 'textarea') {
            // Skip to next input since this one doesn't match our rules
        continue;
        }

        // Add Input Name and value followed by a line break
        message += target[i].name + ': ' + target[i].value + "\r\n";
    }
    // Modify the hidden body input field that is required for the mailto: scheme
    target.elements["body"].value = message;

    // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
    this.submit();
}

let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menuItem");
let hamburger= document.querySelector(".hamburger");
let closeIcon= document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } 
    else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)