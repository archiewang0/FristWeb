const loadSection = document.querySelector("section.load-section");

// console.log(loadSection.offsetTop);
// console.log(loadSection.getBoundingClientRect().top);


const timelineForLoadSection = new TimelineMax();
timelineForLoadSection.from(loadSection, 0.5, {
    y: "100px",
    opacity: "0",
    ease: Expo.easeOut,
});
timelineForLoadSection.stop();


const loadSectionShowOut = function () {
    // console.log(window.scrollY);
    // console.log(loadSection.offsetTop - window.innerHeight / 1.3);

    if (loadSection.offsetTop - window.innerHeight / 1.5 < window.scrollY) {
        timelineForLoadSection.play();
    }
};

window.addEventListener("scroll", loadSectionShowOut);
