"use strict";

// Open dropdown menu on mouse:hover
/*window.addEventListener('load', function (event) {

    // TODO: remove duplicates

    let mouseEnterListener = function(event){
        console.log('Event: mouseenter', event.target);

        // only apply it if we're in un-collapsed/desktop mode
        let navBarTogglerEl = event.target.closest('.navbar').querySelector('.navbar-toggler');
        // https://stackoverflow.com/a/4866269 - use getComputedStyle
        if(window.getComputedStyle(navBarTogglerEl, null).display == 'block'){
            return; // bail
        }

        event.target.setAttribute("aria-expanded", true);
        event.target.classList.add('show');
        event.target.querySelector('.dropdown-menu').classList.add('show');
    }

    let mouseLeaveListener = function(event){

       // only apply it if we're in un-collapsed/desktop mode
       let navBarTogglerEl = event.target.closest('.navbar').querySelector('.navbar-toggler');
       // https://stackoverflow.com/a/4866269
       console.log(navBarTogglerEl, window.getComputedStyle(navBarTogglerEl, null).display);
       if(window.getComputedStyle(navBarTogglerEl, null).display == 'block'){
           return; // bail
       }

        console.log('Event: mouseleave', event.target);
        event.target.setAttribute("aria-expanded", false);
        event.target.classList.remove('show');
        event.target.querySelector('.dropdown-menu').classList.remove('show');
    }
    
    let navItemsWithDropdowns = document.querySelectorAll('.navbar .nav-item.dropdown');
    console.log('nav items (li) with dropdown found:',navItemsWithDropdowns);
    navItemsWithDropdowns.forEach(function (el, index) {
        el.addEventListener('mouseenter', function (event) {
            mouseEnterListener(event);
        }, false);
        el.addEventListener('mouseleave', function (event) {
            mouseLeaveListener(event);
        }, false);
        
    });
});*/