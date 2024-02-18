// Third News Container
let newsThird = document.querySelector(".container-third");

let divThirdNews = document.createElement("div");
divThirdNews.classList.add("news");

let aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

let imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/facebook.jpg");
imgThirdNews.setAttribute("alt", "facebook-img");

aImgThirdNews.append(imgThirdNews);
divThirdNews.append(aImgThirdNews);

divInfoTextThird = document.createElement("div");
divInfoTextThird.classList.add("info-text");

let h3Title = document.createElement("h3");
h3Title.textContent = "Facebook: Dintr-o cameră de cămin de la Harvard la un fenomen global";

divInfoTextThird.append(h3Title);
divThirdNews.append(divInfoTextThird);


newsThird.append(divThirdNews);
// ------------------------------------------------------------------------------------------------
 newsThird = document.querySelector(".container-third");

 divThirdNews = document.createElement("div");
divThirdNews.classList.add("news");

 aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/elon-musk.jpg");
imgThirdNews.setAttribute("alt", "elon-musk-img");

aImgThirdNews.append(imgThirdNews);
divThirdNews.append(aImgThirdNews);

let divInfoTextThird2 = document.createElement("div");
divInfoTextThird2.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "Ce avere are Elon Musk. Câţi bani câştigă fondatorul Tesla și SpaceX";

divInfoTextThird2.append(h3Title);
divThirdNews.append(divInfoTextThird2);


newsThird.append(divThirdNews);
// ------------------------------------------------------------------------------------------------
newsThird = document.querySelector(".container-third");

divThirdNews = document.createElement("div");
divThirdNews.classList.add("news");

aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/nasa.jpg");
imgThirdNews.setAttribute("alt", "mars-img");

aImgThirdNews.append(imgThirdNews);
divThirdNews.append(aImgThirdNews);

let divInfoTextThird3 = document.createElement("div");
divInfoTextThird3.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "Termenul de funcționare a Parcului IT din R. Moldova, extins până în 2035";

divInfoTextThird3.append(h3Title);
divThirdNews.append(divInfoTextThird3);


newsThird.append(divThirdNews);

// ------------------------------------------------------------------------------------------------
newsThird = document.querySelector(".container-third");

divThirdNews = document.createElement("div");
divThirdNews.classList.add("news");

aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/bill-gates.jpg");
imgThirdNews.setAttribute("alt", "bill-gatesimg");

aImgThirdNews.append(imgThirdNews);
divThirdNews.append(aImgThirdNews);

let divInfoTextThird4 = document.createElement("div");
divInfoTextThird4.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "Bill Gates explică cum inteligența artificială va schimba viața oamenilor";

divInfoTextThird4.append(h3Title);
divThirdNews.append(divInfoTextThird4);

newsThird.append(divThirdNews);

console.log(newsThird);