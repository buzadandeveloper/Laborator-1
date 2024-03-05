// const slider = document.querySelector(".container-ads");
// const firstAdd = slider.querySelectorAll(".ads")[0];
// const arrowBtns = document.querySelectorAll(".container-content i");

// let isDragging = false, startX, startScrollLeft;
// let firstAdsWidth = firstAdd.clientWidth + 16;

// const draggingStart = (e) => {
//     isDragging = true;
    
//     startX = e.pageX;
//     startScrollLeft = slider.scrollLeft;
// }

// const dragging = (e) => {
//    if(!isDragging) return;
// //    slider.classList.add("dragging");
//    e.preventDefault();
//     slider.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const draggingStop = () => {
//     isDragging = false;
//     //slider.classList.remove("dragging");

// }

// slider.addEventListener("mousedown", draggingStart);
// slider.addEventListener("mousemove", dragging);
// slider.addEventListener("mouseup", draggingStop);

// slider.addEventListener("touchstart", draggingStart);
// slider.addEventListener("touchmove", dragging);
// slider.addEventListener("touchend", draggingStop);

// arrowBtns.forEach(e => {
//     e.addEventListener("click", () => {
//         if(e.id == "left"){
//             slider.scrollLeft -= firstAdsWidth;
//         }
//         else{
//             slider.scrollLeft += firstAdsWidth;
//         }
//     })
// })

const slider = document.querySelector(".container-ads");
const firstAdd = slider.querySelectorAll(".ads")[0];
const arrowBtns = document.querySelectorAll(".container-content i");

let isDragging = false, startX, startScrollLeft;
let firstAdsWidth = firstAdd.clientWidth + 16;

const draggingStart = (e) => {
    isDragging = true;
    startX = e.touches ? e.touches[0].pageX : e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    e.preventDefault();
    const currentX = e.touches ? e.touches[0].pageX : e.pageX;
    slider.scrollLeft = startScrollLeft - (currentX - startX);
}

const draggingStop = () => {
    isDragging = false;
}

slider.addEventListener("mousedown", draggingStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", draggingStop);

slider.addEventListener("touchstart", draggingStart);
slider.addEventListener("touchmove", dragging);
slider.addEventListener("touchend", draggingStop);

arrowBtns.forEach(e => {
    e.addEventListener("click", () => {
        if(e.id == "left"){
            slider.scrollLeft -= firstAdsWidth;
        }
        else{
            slider.scrollLeft += firstAdsWidth;
        }
    })
})
