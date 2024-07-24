gsap.from("#scroll-cont img", {
    scale: 5,
    opacity: 0,
    duration: 1,
    filter: "blur(1)",
    scrollTrigger: {
        trigger: "#scroll",
        scroller: "body",
        start: "top 75%",
        end: "top 65%",
        scrub: 3
    }
})