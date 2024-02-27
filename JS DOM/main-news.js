// Main News Container
let newsMain = document.querySelector(".container-main");

let imgNewsMain = document.createElement("img");
imgNewsMain.setAttribute("src", "/image/neural-link.jpg");
imgNewsMain.setAttribute("alt", "neural-link-img");

let divInfoNews = document.createElement("div");
divInfoNews.setAttribute("id", "main");
divInfoNews.classList.add("info-main");

let divImgInfoNews = document.createElement("div");
divImgInfoNews.classList.add("main-img");
divImgInfoNews.append(imgNewsMain);

let h1InfoNews = document.createElement("h1");
h1InfoNews.textContent = "Neuralink a realizat primul implant în creierul uman";

let pInfoNews = document.createElement("p");
pInfoNews.textContent =
  "Pe 28 ianuarie, compania de neurotehnologie Neuralink a antreprenorului Elon Musk a realizat pentru prima dată un implant în creierul uman.";

newsMain.append(divImgInfoNews);
divInfoNews.append(h1InfoNews);
divInfoNews.append(pInfoNews);
newsMain.append(divInfoNews); 

newsMain.addEventListener("click", () => {
  window.location.href = "#";
})


