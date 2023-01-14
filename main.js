gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to(".text", { x: '0%', duration: 1, stagger: 0.25 });

tl.to(".image-anim", { x: '0%', duration: 1 }, "-=1");

tl.to(".slider", { y: '-100%', duration: 1.5, delay: 0.7});

tl.to(".intro-animation", { y: "-100%", duration: 1}, "-=1");

tl.to(".cta__logo img", {
    scrollTrigger: {
        animation: tl,
        trigger: ".cta__logo img",
        start: "top 70px",
        toggleActions: "restart none none none",
        scrub: true
    },
    opacity: 0.5,
    scale: 0.5,
    duration: 2,
    ease: "power1.out"
})
    .from(".cta__intro", {
        scale: 0,
        opacity: 0,
        duration: 1
    })
    .from(".cta__description", {
        opacity: 0,
        duration: 1,
    })
    .from(".top-btn--primary", {
        scrollTrigger: {
            trigger: ".cta__intro",
            start: "top 40%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "-100%",
        duration: 1,
        opacity: 0
    })
    .from(".top-btn--secondary", {
        scrollTrigger: {
            trigger: ".cta__intro",
            start: "top 40%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "100%",
        duration: 1,
        opacity: 0
    }, "-=1")

    tl.to(".about__intro", {
        opacity: 1,
        duration: 1,
        ease: "power1.in"
    });

    tl.from(".about__description", {
        scrollTrigger: {
            trigger: ".about__text",
            start: "top 50%",
            end: "+=200px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        y: "10%",
        opacity: 0,
        duration: 1,
        ease: "power1.out"
    })

    tl.from(".features", {
        scrollTrigger: {
            trigger: ".about__description",
            start: "top 40%",
            end: "+=200px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "100%",
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        ease: "bounce"
    });

    tl.from(".illustration-image", {
        scrollTrigger: {
            trigger: ".about__description",
            start: "top 40%",
            end: "+=200px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: 'linear'
    }, "+=1")

    tl.from(".benefits__intro", {
        scrollTrigger: {
            trigger: ".anim",
            start: "top 40%",
            end: "+=200px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        y: "-30%",
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })

    tl.from(".benefits__description", {
        scrollTrigger: {
            trigger: ".benefits__text",
            start: "top 60%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        y: "20%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    }, "+=1")

    tl.from(".benefits__image img", {
        scrollTrigger: {
            trigger: ".benefits__text",
            start: "top 40%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'slow'
    })

    tl.from(".functionalities__intro", {
        scrollTrigger: {
            trigger: ".benefits__image img",
            start: "bottom 70%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        opacity: 0,
        y: "-20%",
        duration: 1,
        ease: "power1.out"
    })
    tl.from(".functionalities__description", {
        scrollTrigger: {
            trigger: ".benefits__image img",
            start: "bottom 70%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        opacity: 0,
        y: "20%",
        duration: 1,
        ease: "power1.out"
    }, "+=1")

    tl.from(".functionality", {
        scrollTrigger: {
            trigger: ".benefits__image img",
            start: "bottom 50%",
            end: "+=300px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        y: "20%",
        opacity: 0,
        duration: 2,
        stagger: 0.6,
        ease: "power1.out"
    })

    tl.from(".logos img", {
        scrollTrigger: {
            trigger: ".functionalities",
            start: "center 50%",
            end: "+=300px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        opacity: 0,
        duration: 2,
        stagger: 0.6,
        ease: "power1.out"
    })

    tl.from(".clipboard__text", {
        scrollTrigger: {
            trigger: ".logos",
            start: "bottom 50%",
            end: "+=100px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })

    tl.from(".bottom-btn--primary", {
        scrollTrigger: {
            trigger: ".clipboard__text h2",
            start: "top 50%",
            end: "+=300px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power1.out"
    })

    tl.from(".bottom-btn--secondary", {
        scrollTrigger: {
            trigger: ".clipboard__text h2",
            start: "top 50%",
            end: "+=150px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "100%",
        opacity: 0,
        duration: 1,
        ease: "power1.out"
    }, "+=1")

    tl.from(".footer__logo img", {
        scrollTrigger: {
            trigger: ".bottom",
            start: "top 60%",
            end: "+=70px",
            toggleActions: "restart none none restart",
            scrub: 1
        },
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power1.out"
    });

    tl.from(".footer__links a", {
        scrollTrigger: {
            trigger: ".bottom",
            start: "top 70%",
            end: "+=70px",
            toggleActions: "restart none none restart",
            markers: true,
            scrub: 1
        },
        x: "-30%",
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.5,
    }, "+=1")
