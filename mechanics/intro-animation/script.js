document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase, SplitText);
    CustomEase.create("hop", "0.9,0,0.1,1");

    const splitText = (selector,type,className) => {
        return SplitText.create(selector, {
            type:type,
            [`${type}Class`]: className,
            mask:type,
        });
    };

    const headerSplit = splitText(".header h1", "chars", "char");
    const navSplit = splitText("nav a","words","word");
    const footerSplit = splitText(".hero-footer p","words","word");

    const counterProgress = document.querySelector(".preloader-counter h1");
    const counterContainer = document.querySelector(".preloader-counter");
    const counter = {value:0};

    const t1 = gsap.timeline();

    t1.to(counter, {
        value: 100,
        duration: 3,
        ease: "power3.out",
        onUpdate: () => {
            counterProgress.textContent = Math.floor(counter.value);
        },

        onComplete: () => {
            const counterSplit = splitText(counterProgress, "chars", "digit");
            gsap.to(counterSplit.chars, {
                x: "-100%",
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.1,
                delay: 1,
                onComplete: () => {
                    counterContainer.remove();
                },
            });
        },
    });
    t1.to(counterContainer, {
        scale: 1,
        duration: 3,
        ease: "power3.out",
    },
    "<");

    t1.to(".progress-bar", {
        scaleX: 1,
        duration: 3,
        ease: "power3.out",
    }, "<");

    t1.to(".hero-bg", {
        clipPath: "polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)",
        duration:1.5,
        ease: "hop"
    }, 4.5);

    t1.to(".hero-bg img", {
        scale:1.5,
        duration: 1.5,
        ease: "hop"
    }, "<");

    t1.to(".hero-bg", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:2,
        ease: "hop"
    }, 6);

    t1.to(".hero-bg img", {
        scale:1,
        duration: 2,
        ease: "hop"
    },6);

    t1.to(".progress", {
        scaleX:1,
        duration: 2,
        ease: "hop"
    }, 6);

    t1.set(".header", { autoAlpha: 1 }, 7);

    t1.to(".header h1 .char", {
        x:"0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
    },7);

    t1.to("nav a .word", {
        y:"0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
    }, 7.5);

    t1.to(".hero-footer p .word", {
        y:"0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
    },8);
})
