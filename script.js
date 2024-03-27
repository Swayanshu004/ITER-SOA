//first
gsap.to(".logo-text",{
    x: 200,
    duration:.7,
    
}) 


//second
gsap.from(".num-count-4", {
  scrollTrigger:{
      trigger:".top",
      scroller:"body",
      start:"0% 80%",
      end:"top 50%",
      // markers: true,
      scrub:6
  },
  textContent: 54,
  duration: 6,
  ease: "power1.in",
  snap: { textContent: 1 },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    },
  }
});
gsap.from(".num-count-1", {
  textContent: 920000,
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        start:"0% 80%",
        end:"top 50%",
        // markers: true,
        scrub:5
    },
    duration: 6,
    ease: "power1.in",
    snap: { textContent: 920000 },
    stagger: {
      each: 1.0,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    }
  });
gsap.from(".num-count-2", {
    textContent: 0,
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        start:"0% 80%",
        end:"top 50%",
        // markers: true,
        scrub:5
    },
    duration: 6,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
      each: 1.0,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    }
  });
gsap.from(".num-count-3", {
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        start:"0% 80%",
        end:"top 50%",
        // markers: true,
        scrub:5
    },
    textContent: 0,
    duration: 6,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
      each: 1.0,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    }
  });

  
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

//third 
gsap.to(".strip-l",{
    x: 800,
    duration:.4,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"0% 70%",
        end:"0% 30%",
        // markers: true,
        scrub:5
    }
})    
gsap.to(".strip-r",{
    x: -300,
    duration:.4,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"0% 70%",
        end:"0% 30%",
        // markers: true,
        scrub:5
    }
}) 

//forth
gsap.to("#arrow",{
  x: 150,
  duration:.4,
  scrollTrigger:{
    trigger:".textabout",
    scroller:"body",
    start:"top 70%",
    end:"top 30%",
    // markers: true,
    scrub:5
  }
}) 