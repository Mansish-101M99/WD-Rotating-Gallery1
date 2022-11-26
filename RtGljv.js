
const imgContEl = document.querySelector(".image-cont");
const pvEl = document.getElementById("prev");
const ntEl = document.getElementById("next");

let x = 0, stout = 0;
pvEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(stout);
    console.log("The changed and now current angle: ", x);
    updateGalleryPics();
});
ntEl.addEventListener("click", () => {
    x = x- 45;
    clearTimeout(stout);
    console.log("The changed and now current angle: ", x);
    updateGalleryPics();
});

function updateGalleryPics() {
    imgContEl.style.transform = `perspective(1100px) rotateY(${x}deg)`;
    stout = setTimeout(() => {
        x = x - 45;
    }, 2000 /*in millisec.*/);
}

updateGalleryPics();