const tl = gsap.timeline({defaults:{ease: 'power1.out'}});

function home_load() {
    tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
    tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
    tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
    tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
    tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
    tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
    tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
}

function open_withdrawl() {
    var x = document.getElementsByClassName("withdrawl");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function open_account() {
    var x = document.getElementsByClassName("account");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function open_about() {
    var x = document.getElementsByClassName("about");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function open_earn() {
    var x = document.getElementsByClassName("earn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}