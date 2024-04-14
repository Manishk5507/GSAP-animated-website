gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





function time(){
    var a=0;
    setInterval(function(){
        a +=Math.floor(Math.random()*15);
        if(a<100){
            document.querySelector(".loader h1").innerHTML=a+"%";
        }else{
            a=100;
            document.querySelector(".loader h1").innerHTML=a+"%";
            return
        }
        console.log(a)
        
    },50)
}

const tl=gsap.timeline();

tl.to(".loader h1",{
   onStart:time()
})

tl.to(".loader",{
    top:"-100vh",
    opacity:0,
    duration:0.5
})



tl.from("nav, nav .part1, nav .part2, nav .part3",{
    opacity:0,
    y:-80,
    duration:0.5,
    stagger:0.3
})

tl.from(".container .left h1",{
    left:-400,
    scale:0,
    opacity:0,
    duration:0.5
})

tl.from(".right img",{
    scale:2,
    opacity:0,
    duration:0.5
})

gsap.from(".page2 .boxes",{
    opacity:0,
    scale:0,
    duration:0.2,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
        // pin:true
    }
})

gsap.to(".page3 h1",{
    transform:"translateX(-80%)",
    color: "blue",
    fontWeight:100,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true


    }

})

gsap.from(".page4 .boxes",{
    opacity:0,
    left:"-100%",
    duration:0.5,
    stagger:0.8,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 50%%",
        end:"top 100%",
        scrub:2
    }
})