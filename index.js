const horizontalSections = gsap.utils.toArray("section.horizontal");
const animationWrap = document.querySelector(".animation-wrap").offsetWidth;

horizontalSections.forEach(function (sec, i) {
  var thisPinWrap = sec.querySelector(".pin-wrap");
  var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

  // gsap.fromTo(thisAnimWrap, { x: 0 }, {
  //   x: getToValue(),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: sec,
  //     start: "top top",
  //     end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
  //     pin: thisPinWrap,
  //     invalidateOnRefresh: true,
  //     //anticipatePin: 1,
  //     scrub: true,
  //     //markers: true,
  //   }
  // });
  var endValue = () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth);
  var endValue2 = () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth);
  console.log(thisAnimWrap.scrollWidth - window.innerWidth - 100);
  let scrollTween = gsap.fromTo(
    thisAnimWrap,
    { x: 0 },
    {
      x: getToValue(),
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        start: "top 0",
        end: endValue, // use a calculated value
        // pin: thisPinWrap,
        invalidateOnRefresh: true,
        scrub: true,
        // markers: true
      },
    }
  );


  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".landing-banner",
      start: "0% 0%",
      end: "100% 100%", // use a calculated value
      scrub: true,
      pin: "section.blank",
      // markers: true
    },
  })

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".landing-trigger-1",
      start: "0% 100%",
      end: "100% 0%", // use a calculated value
      scrub: true,
    },
  }).to(".yellow-bg", {
    opacity: 1
  })

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".landing-trigger-1",
      start: "0% -100%",
      end: "100% -200%", // use a calculated value
      scrub: true,
    },
  }).to(".yellow-bg", {
    opacity: 0
  })


  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".anim-height",
      start: "0% 0%",
      end: "100% 100%", // use a calculated value
      scrub: true,
      pin: thisPinWrap,
      // markers: true
    },
  })



  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-1",
      start: "0% 80%",
      end: "100% 20%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 1
    })

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-1",
      start: "0% -30%",
      end: "100% -80%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 0
    })



  // Section 2

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-2",
      start: "0% 200%",
      end: "100% 80%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 1
    }, 0)
    .to(".drill_s", {
      scale: 10,
      transformOrigin: "center bottom"
    }, 0)

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-2",
      start: "0% 20%",
      end: "100% -80%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 0
    }, 0)



  // Section 3

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-3",
      start: "0% 150%",
      end: "100% 20%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 1
    }, 0)
    .to(".drilling .drill_l", {
      scale: 0.1,
      transformOrigin: "center bottom"
    }, 0)

  gsap.timeline({
    scrollTrigger:
    {
      trigger: ".transition-trigger-3",
      start: "0% 20%",
      end: "100% -80%", // use a calculated value
      scrub: true,
      // markers: true
    },
  })
    .to(".brown-overlay", {
      opacity: 0
    }, 0)


  // let scrollTween2 = gsap.fromTo(
  //   thisAnimWrap,
  //   { x: 0 },
  //   {
  //     x: getToValue(),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: sec,
  //       start: "top 0",
  //       end: endValue, // use a calculated value
  //       pin: thisPinWrap,
  //       invalidateOnRefresh: true,
  //       scrub: true,
  //       markers: true
  //     },
  //   }
  // );

  // gsap.fromTo(".truck", { x: 500 }, {
  //   x: 1000,
  //   ease: "none",
  //   scrollTrigger: {
  //     containerAnimation: scrollTween,
  //     trigger: '#section_7',
  //     start: "left left",
  //     end: "+=5000", // use the same calculated value
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  // gsap.fromTo(".truckwheel", { x: 500 }, {
  //   x: 1000,
  //   ease: "none",
  //   scrollTrigger: {
  //     containerAnimation: scrollTween,
  //     trigger: '#section_7',
  //     start: "left left",
  //     end: "+=5000",
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  gsap.fromTo(
    ".truck",
    { x: 0 },
    {
      x: 2100,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#section_2",
        start: "left left",
        end: "+=24000", // use the same calculated value
        scrub: true,
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    ".truckwheel",
    { x: 0 },
    {
      x: 2100,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#section_2",
        start: "left left",
        end: "+=24000",
        scrub: true,
        // markers: true,
      },
    }
  );

  // gsap.to("#man", {
  //   x: "+=280",
  //   opacity: 1,
  //   ease: "none",
  //   bottom: "18%",
  //   scrollTrigger: {
  //     containerAnimation: scrollTween,
  //     trigger: '#man',
  //     start: "left right",
  //     end: "+=3000",
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  const man_tl = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: "#section_12",
      start: "top center",
      end: "+=1500",
      scrub: true,
      // markers: true,
    },
  });

  man_tl
    .to("#man", { x: "+325", ease: "linear", duration: 1.5, bottom: "16%" }, 0)
    .to("#man", { opacity: 0 }, 3);
});

// gsap.fromTo(".truck", { x: 0 }, {
//   x: 200,
//   ease: "none",
//   scrollTrigger: {
//     trigger: '.horizontal',
//     start: "top bottom",
//     end: "+=5000",
//     scrub: true,
//   },
// })

gsap.fromTo(
  ".bg_mountain",
  { x: 0 },
  {
    x: -1000,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".cloud",
  { x: 0 },
  {
    x: -2000,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      scrub: true,
    },
  }
);

// gsap.fromTo(".mountain", { x: 0 }, {
//   x: -3000,
//   ease: "none",
//   scrollTrigger: {
//     trigger: '.horizontal',
//     scrub: true,
//   },
// })

// Truck Wheel Animation

const dev = {};

dev.interactions = {
  button: function () {
    let $button_left = document.querySelector(".truckwheel-left");
    gsap.set($button_left, {
      opacity: 1,
      left: 112,
    });

    var rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: "html",
          scrub: 0.2,
          start: "top top",
          end: "+=24000",
        },
      })
      .to($button_left, {
        rotation: 360 * 50,
        duration: 1,
        ease: "none",
      });

    let $button_right = document.querySelector(".truckwheel-right");
    gsap.set($button_right, {
      left: 160,
      opacity: 1,
    });

    var rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: "html",
          scrub: 0.2,
          start: "top top",
          end: "+=24000",
        },
      })
      .to($button_right, {
        rotation: 360 * 50,
        duration: 1,
        ease: "none",
      });
  },
};

dev.interactions.button();

// Drill Animation

let drill_s = document.querySelector(".drill_s");
let image_s = drill_s.querySelector("img");

let drill_l = document.querySelector(".drill_l");
let image_l = drill_l.querySelector("img");

// First Animation

// gsap.fromTo(
//   drill_s,
//   { y: 0, delay: 3 },
//   {
//     y: 900,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: drill_s,
//       start: "bottom 0%",
//       end: "+=10000",
//       scrub: true,
//       pin: true,

//       onUpdate: (self) => {
//         let progress = self.progress.toFixed(2);
//         let imageIndex = Math.floor(progress * 50) % 5;
//         let imageUrl = `./assets/drill/drill_${imageIndex + 1}.svg`;
//         image_s.setAttribute("src", imageUrl);
//       },
//     },
//   }
// );

gsap.to(drill_s, {
  y: 700,
  immediateRender: false,
  scrollTrigger: {
    trigger: drill_s,
    start: "bottom 0%",
    end: "+=10000",
    scrub: true,
    pin: true,
    // markers: true,
    onUpdate: (self) => {
      let progress = self.progress.toFixed(2);
      let imageIndex = Math.floor(progress * 50) % 5;
      let imageUrl = `./assets/drill/drill_${imageIndex + 1}.svg`;
      image_s.setAttribute("src", imageUrl);
    },
  },
});

gsap.fromTo(
  drill_l,
  { y: 0 },
  {
    y: 900,
    immediateRender: false,
    scrollTrigger: {
      trigger: drill_l,
      start: "bottom 0%",
      end: "+=10000",
      scrub: true,
      pin: true,

      onUpdate: (self) => {
        let progress = self.progress.toFixed(2);
        let imageIndex = Math.floor(progress * 60) % 6;
        let imageUrl = `./assets/drill_0${imageIndex + 1}.svg`;
        image_l.setAttribute("src", imageUrl);
      },
    },
  }
);

// Motion Path

var ww = window.innerWidth,
  wh = window.innerHeight,
  speed = 10,
  scrollDist = wh * speed,
  scrollEnd = wh * (speed - 1),
  map = document.getElementById("map"),
  mapWidth = map.getBoundingClientRect().width,
  mapHeight = map.getBoundingClientRect().height;

gsap.set("#scrollDist", { width: "100%", height: scrollDist });
gsap.set("#container", {
  position: "fixed",
  width: mapWidth,
  height: mapHeight,
  transformOrigin: "0 0",
  left: "50%",
  top: "-100px",
  autoAlpha: 1,
});
gsap.set("#point", { scale: 1, opacity: 1 });
gsap.set("#path", { scale: 1, opacity: 1 });

gsap
  .timeline({
    defaults: { duration: 1, ease: "none" },
    scrollTrigger: {
      trigger: "#scrollDist",
      start: "top center",
      end: "+=" + scrollEnd,
      scrub: 0.6,
      onUpdate: ({ progress }) => console.log(progress),
    },
  })
  .to(
    "#point",
    {
      opacity: 1,
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.7, 0.5],
        autoRotate: true,
      },
    },
    0
  )
  .to(
    "#path",
    {
      opacity: 1,
    },
    0
  )
  .to(
    "#container",
    {
      opacity: 1,
      left: "50%",
      top: "80%",
    },
    0
  )

  .to(
    "#container",
    {
      left: "90%",
      top: "80%",
    },
    1
  )

  .from("#path", { drawSVG: "0 0" }, 0.006)
  .set("#point", { scale: 1 }, 1);

let povDelay = 1,
  pos = { x: -mapWidth / 2, y: -mapHeight / 2 },
  xSet = gsap.quickSetter("#container", "x", "px"),
  ySet = gsap.quickSetter("#container", "y", "px");

gsap.ticker.add(() => {
  pos.x += (-gsap.getProperty("#point", "x") - pos.x) * povDelay;
  pos.y += (-gsap.getProperty("#point", "y") - pos.y) * povDelay;
  xSet(pos.x);
  ySet(pos.y);
});

window.onresize = () => {
  gsap.set("#container", {
    left: window.innerWidth / 2,
    top: window.innerHeight / 2,
  });
};

// Blog Fade in and fade out

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog",
    start: "center center",
    end: "+=300 center",
    scrub: "+300",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});

tl.to(".blog", { opacity: 1, duration: 0.5 }).to(
  ".blog",
  { opacity: 0, duration: 0.5 },
  0.5
);
