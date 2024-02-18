// Main News Container
let newsMain = document.querySelector(".container-main");

let imgNewsMain = document.createElement("img");
imgNewsMain.setAttribute("src", "/image/neural-link.jpg");
imgNewsMain.setAttribute("alt", "neural-link-img");

let divInfoNews = document.createElement("div");
divInfoNews.classList.add("info-main");

let aInfoNews = document.createElement("a");
aInfoNews.setAttribute("href", "#");

let aImgInfoNews = document.createElement("a");
aImgInfoNews.setAttribute("href", "#");

let divImgInfoNews = document.createElement("div");
divImgInfoNews.classList.add("main-img");
aImgInfoNews.append(imgNewsMain);
divImgInfoNews.append(aImgInfoNews);

let h1InfoNews = document.createElement("h1");
h1InfoNews.textContent = "Neuralink a realizat primul implant în creierul uman";

let pInfoNews = document.createElement("p");
pInfoNews.textContent =
  "Pe 28 ianuarie, compania de neurotehnologie Neuralink a antreprenorului Elon Musk a realizat pentru prima dată un implant în creierul uman.";

aInfoNews.append(h1InfoNews);

newsMain.append(divImgInfoNews);
divInfoNews.append(h1InfoNews);
divInfoNews.append(pInfoNews);
newsMain.append(divInfoNews);



