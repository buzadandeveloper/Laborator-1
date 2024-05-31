const slider = document.querySelector(".container-ads");
const firstAdd = slider.querySelectorAll(".ads")[0];
const arrowBtns = document.querySelectorAll(".container-content i");

let isDragging = false, startX, startScrollLeft;
let firstAdsWidth = firstAdd.clientWidth ;

const draggingStart = (e) => {
    isDragging = true;
    startX = e.touches ? e.touches[0].pageX : e.pageX;
}

const dragging = (e) => {
    if(!isDragging) return;
    e.preventDefault();
    const currentX = e.touches ? e.touches[0].pageX : e.pageX;
    slider.scrollLeft = startScrollLeft - (currentX - startX);
    setTimeout(() => showActiveIcons(), 1);
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

let scrollWidth = slider.scrollWidth - slider.clientWidth;
const showActiveIcons = () => {
    const greyColor = getComputedStyle(document.documentElement).getPropertyValue('--grey-color');
    arrowBtns[0].style.color = slider.scrollLeft == 0 ? greyColor : "rgb(39, 38, 38)";  
    arrowBtns[1].style.color = slider.scrollLeft == scrollWidth ? greyColor : "rgb(39, 38, 38)";
        
}
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            slider.scrollLeft -= firstAdsWidth;
        } else {
            slider.scrollLeft += firstAdsWidth;
        }
        showActiveIcons();  
    })
});


