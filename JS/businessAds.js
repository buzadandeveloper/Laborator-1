const containerContent = document.querySelector(".container-content");

const containerAds = document.createElement("div");
containerAds.classList.add("container-ads");

let iArrowLeft = document.createElement("i");
iArrowLeft.classList.add("fa-solid");
iArrowLeft.classList.add("fa-angle-left");
iArrowLeft.setAttribute("id", "left");
containerContent.append(iArrowLeft);

function createAds(id, imgPaths, altText, titleText){
    let divAds = document.createElement("div");
    divAds.classList.add("ads");
    divAds.setAttribute("id", id);

    let imgAds = document.createElement("img");
    imgAds.setAttribute("src", imgPaths);
    imgAds.setAttribute("alt", altText);
    imgAds.setAttribute("draggable", "fasle");
    divAds.append(imgAds);

    let divText = document.createElement("div");
    divText.classList.add("title-ads");
    let h3Element = document.createElement("h3");
    h3Element.textContent = titleText;
    divText.append(h3Element);
    divAds.append(divText);

    containerAds.append(divAds);
}

containerContent.append(containerAds);

createAds("1", "./image/imageAds/iute-credit.jpg", "iute-credit-img", "iute Moldova E-Shopping Week: Săptămâna de Reduceri și Cashback Ⓟ");
createAds("2", "./image/imageAds/asus-rog.jpg", "asus-rog-img", "Asus ROG Zephyrus G16 de la Asus ROG - cel mai bun notebook de gaming Ⓟ");
createAds("3", "./image/imageAds/puma-milestii-mici.jpg", "puma-ads.img", "Mileștii Mici Winerun: Aleargă împreună cu Puma Ⓟ");
createAds("4", "./image/imageAds/sat-german.jpg", "sat-german-img", "Satul German anunță tranșa III a lucrărilor de construcție Ⓟ");
createAds("5", "./image/imageAds/visa-vikb.jpg", "cards-visa-vikb-img", "Mergi la Jocurile Olimpice de la Paris 2024 împreună cu Visa și Victoriabank Ⓟ");
createAds("6", "./image/imageAds/bosch.jpg", "bosch-img", "Bosch: Primăvara începe cu oferte avantajoase și reduceri de excepție Ⓟ");

let iArrowRight = document.createElement("i");
iArrowRight.classList.add("fa-solid");
iArrowRight.classList.add("fa-angle-right");
iArrowRight.setAttribute("id", "right");
containerContent.append(iArrowRight);





