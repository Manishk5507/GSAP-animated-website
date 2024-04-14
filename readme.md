gsap.from("div", {
    x:1200,
    delay:0.5,
    duration:0.5,
    stagger:1,
    repeat:-1,
    yoyo:true
});

gsap.from(".page1 .box",{
    opacity:0,
    rotate:360,
    duration:2,
    scale:0,
    delay:1

})

gsap.from(".page2 .box",{

    opacity:0,
    rotate:360,
    duration:2,
    scale:0,
    delay:1,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2
    }
})


@font-face {
    font-family:name ;
    src: url();
}


//To make the text in a single line
{
    white-space:nowrap;
}

//To make the page move left to right on scrolling down
gsap.to(".page3 h1",{
    transform:"translateX(-80%)",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }

})