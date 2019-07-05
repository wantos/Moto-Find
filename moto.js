(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#pricing').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-72},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:75});function a(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-scrolled"):e("#mainNav").removeClass("navbar-scrolled")}a(),e(window).scroll(a),e("#portfolio").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);

function Contact(firstname, phone, lastname, email, address) {
  this.firstname = firstname;
  this.phone = phone;
  this.lastname = lastname;
  this.email = email;
  this.address = address
};


var contacts = [];


var saveContact = () => {
  var firstname = document.querySelector('[name="firstname"]').value;

  var phone = document.querySelector('[name="phone"]').value;

  var email = document.querySelector('[name=email]').value;

  var address = document.querySelector('[name=address').value;
  var newcontact = new Contact(firstname, phone);
        // saves contact
  contacts.push(newcontact);
  
  console.log('saved!');
  
};


var contactLookup = () => {
  
  document.getElementById("result").innerHTML = "";
  
  var contactLookup = document.querySelector('[name="contact_lookup"]').value;

  for (i = 0; i < contacts.length; i++) {
    
    contact = contacts[i];
    // first name of contact
    firstname = contact.firstname;
    phone = contact.phone;
     
    if (firstname.includes(contact_lookup)) {
    
    console.log(firstname, " found!") 
    
    var ptag = document.createElement("p");
    var node = document.createTextNode(firstname + ": "+ phone);
    ptag.appendChild(node);
    var element = document.getElementById("result");
    element.appendChild(ptag);
  } else {
    
    console.log("Not found!")
  }
  };
};



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}









