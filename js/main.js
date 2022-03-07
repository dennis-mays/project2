document.addEventListener("DOMContentLoaded", init);

function init() {
    //create shortcut vars
    const back_btn = document.querySelector(".back-btn");
    const next_btn = document.querySelector(".next-btn");
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    const controls = document.querySelector(".controls");

    //with JS active, hide all images
    slides.forEach((slide) => {
        slide.classList.add("hide", "abs-pos");
    });

    // show the first slide
    slides[0].classList.remove("hide");

    //make the controls work
    next_btn.addEventListener("click", changeSlide);
    back_btn.addEventListener("click", changeSlide);

    // set the caption dynamically
    caption.innerHTML = frame.firstElementChild.alt;

    //show the controls
    controls.style.display = "block";
}

function changeSlide(e) {
    // stop link from trying to reload page
    e.preventDefault();

    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    let showing = document.querySelector(".current");
    let nextUp = "";

    if (e.target.className == "next-btn") {
        nextUp = showing.nextElementSibling;
    }

    if (e.target.className == "back-btn") {
        nextUp = showing.previousElementSibling;
    }

    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");

    //make sure next image is there
    if (!nextUp) {
        nextUp = slides[slides.length - 1];
    }

    if (nextUp.nodeName !== "IMG") {
        nextUp = slides[0];
    }

    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    //change caption text
    caption.innerHTML = nextUp.alt;
}
