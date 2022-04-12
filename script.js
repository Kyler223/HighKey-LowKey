// reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -2;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

// hamburger on click
function hamburgerClick() {
  var navigation = document.getElementById('navigation');
  var navItems = document.querySelectorAll('.navItem');
  var cart = document.getElementById('cart');
  var hamburger = document.getElementById('hamburger');

  classToggler(navigation, 'navLinksDropdown');
  classToggler(navigation, 'navigation-expand');
  navItems.forEach(item => {classToggler(item, 'navItemDropdown')});
  classToggler(cart, 'display-none');
  classToggler(cart, 'cart-absolute');
  classToggler(hamburger, 'hamburger-expanded');
}

// click event for Our Products
function productsClick() {
  var dropdownContent = document.getElementById('dropdown-content');
  var width = window.innerWidth;

  if(width <= 800) {
    classToggler(dropdownContent, 'display-block');
  }
}

function classToggler(element, className) {
  element.classList.toggle(className);
}