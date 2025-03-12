let cursor = document.getElementById("cursor");
let main = document.getElementById('main');
let image = document.getElementById('image');


main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5
    })
})

// Mouse enter on image
image.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "hsla(0, 3%, 78%, 0.596)"
    })
})

// Mouse out from image
image.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 1
    })
})