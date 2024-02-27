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
divInfoTextThird.setAttribute("id", "4");
divInfoTextThird.classList.add("info-text");

let h3Title = document.createElement("h3");
h3Title.textContent = "Facebook: Dintr-o cameră de cămin de la Harvard la un fenomen global";

divInfoTextThird.append(h3Title);
divThirdNews.append(divInfoTextThird);


// newsThird.append(divThirdNews);
// ------------------------------------------------------------------------------------------------
//  newsThird = document.querySelector(".container-third");

 let divThirdNews2 = document.createElement("div");
divThirdNews2.classList.add("news");

 aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/elon-musk.jpg");
imgThirdNews.setAttribute("alt", "elon-musk-img");

aImgThirdNews.append(imgThirdNews);
divThirdNews2.append(aImgThirdNews);

let divInfoTextThird2 = document.createElement("div");
divInfoTextThird2.setAttribute("id", "5");
divInfoTextThird2.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "Ce avere are Elon Musk. Câţi bani câştigă fondatorul Tesla și SpaceX";

divInfoTextThird2.append(h3Title);
divThirdNews2.append(divInfoTextThird2);


// newsThird.append(divThirdNews2);
// ------------------------------------------------------------------------------------------------
// newsThird = document.querySelector(".container-third");

let divThirdNews3 = document.createElement("div");
divThirdNews3.classList.add("news");

aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/nasa.jpg");
imgThirdNews.setAttribute("alt", "mars-img");

aImgThirdNews.append(imgThirdNews);
divThirdNews3.append(aImgThirdNews);

let divInfoTextThird3 = document.createElement("div");
divInfoTextThird3.setAttribute("id", "6");
divInfoTextThird3.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "NASA caută patru voluntari pentru o simulare de un an a vieţii pe Marte";

divInfoTextThird3.append(h3Title);
divThirdNews3.append(divInfoTextThird3);


// newsThird.append(divThirdNews3);

// ------------------------------------------------------------------------------------------------
// newsThird = document.querySelector(".container-third");

let divThirdNews4 = document.createElement("div");
divThirdNews4.classList.add("news");

aImgThirdNews = document.createElement("a");
aImgThirdNews.setAttribute("href", "#");

imgThirdNews = document.createElement("img");
imgThirdNews.setAttribute("src", "/image/bill-gates.jpg");
imgThirdNews.setAttribute("alt", "bill-gatesimg");

aImgThirdNews.append(imgThirdNews);
divThirdNews4.append(aImgThirdNews);

let divInfoTextThird4 = document.createElement("div");
divInfoTextThird4.setAttribute("id", "7");
divInfoTextThird4.classList.add("info-text");

h3Title = document.createElement("h3");
h3Title.textContent = "Bill Gates explică cum inteligența artificială va schimba viața oamenilor";

divInfoTextThird4.append(h3Title);
divThirdNews4.append(divInfoTextThird4);

// newsThird.append(divThirdNews4);



// ---------------------------------------separate into 2 containers-------------------------------------------------
let thirdOne = document.createElement("div");
thirdOne.classList.add("third-one");

let thirdTwo = document.createElement("div");
thirdTwo.classList.add("third-two");

thirdOne.append(divThirdNews);
thirdOne.append(divThirdNews2);
thirdTwo.append(divThirdNews3);
thirdTwo.append(divThirdNews4);

newsThird.append(thirdOne);
newsThird.append(thirdTwo);

console.log(newsThird);