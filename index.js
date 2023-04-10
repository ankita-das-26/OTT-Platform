let movies = [
    {
        name: "Podcast by devi",
        des:
            "Regardless of the prevailing social milieu, Devi is promoting the cultural arts of her handicrafts and how she managed to maintain a healthy work-life balance.",

        image: "images/slider 2 (2).png"
    },

    {
        name: "THE MARRIAGE",
        des:
            "Here's presenting the perfect love tale with a sweet yet magnificent marriage of Krishna and Jay who had fought with all kinds of bizarre.",
        image: "images/180409-Allen-LGBT-community-hero_aiibkc.jpg"
    },

    {
        name: "Vision",
        des:
            "Savitri, who was able to create a vision for her kids, emerged more resilient and fearless, giving fashion a fresh perspective.",

        image: "images/slider 3.png"
    },

    {
        name: "Looking up",
        des:
            "The life where everything looks up as impossible, still the hope and faith of yourself will lead to a better tomorrow",
        image: "images/slider 4.png"
    },

    {
        name: "Beautiful Minds",
        des:
            "The mind plays a tough game, a game where you can stay inactive, but it will keep on working as forever as ever",
        image: "images/slider 5.png"
    },

];

const carousel = document.querySelector('.caraousel');
let sliders = [];

let slideindex = 0; //To track the current slide.

const createslide = () => {
    if (slideindex >= movies.length) {
        slideindex = 0;
    }

    //Creating DOM Elements
    let slide = document.createElement('div');
    var imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //Attaching all the elements
    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    carousel.appendChild(slide);


    // Setting up images
    imgelement.src = movies[slideindex].image;
    slideindex++;

    // Setting elements class-names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createslide();
}

setInterval(() => {
    createslide();
}, 3000);


// VIDEO CARDS 

const videocards = [...document.querySelectorAll('.video-card')];

videocards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//CARD SLIDERS
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBTns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBTns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

