import { projectsData } from "./projects";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop" , "0.9,0,0.1,1");

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.querySelector(".projects");
    const locationsContainer = document.querySelector(".locations");
    const gridImages = gsap.utils.toArray(".img");
    const heroImage = document.querySelector(".img.hero-img");

    const images = gridImages.filter((img) => img !== heroImage);

    const introCopy = new SplitType(".intro-copy h3", {
        type: "words",
        absolute: false,
    });

    const  titleHeading = new SplitType(".title h1", {
        type: "words",
        absolute: false,
    });

    const allImageSources = Array.from(
        { length: 12 },
        (_, i) => `./assets-intro-layers/img-${i + 1}.webp`
    );

    const getRandomImageSet = () => {
        const shuffled = [...allImageSources].sort(() => 0.5 - Math.random());
        return shuffled.slice(0,9);
    };

    
})