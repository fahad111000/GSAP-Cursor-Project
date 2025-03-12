let cursor = document.getElementById("cursor");
let main = document.getElementById('main');

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5
    })
})