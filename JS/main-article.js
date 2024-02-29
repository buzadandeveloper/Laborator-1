import {toLink} from './toLinks.js'
let newsList = document.querySelector(".news-container");
let divNews = document.createElement("div");
divNews.classList.add("news");
divNews.setAttribute("id", "1");

let imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/neural-link.jpg");
imgNews.setAttribute("alt", "brain-chip-img");


let h3News = document.createElement("h3");
h3News.textContent = "Neuralink a realizat primul implant în creierul uman";
divNews.append(imgNews);
divNews.append(h3News);
newsList.prepend(divNews);
//--------------------------------------------------------------------------------------------
divNews = document.createElement("div");
divNews.classList.add("news");
divNews.setAttribute("id", "2");

imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/chat-gpt2.jpg");
imgNews.setAttribute("alt", "chat-gpt-img");
imgNews.setAttribute("href", "#");


h3News = document.createElement("h3");
h3News.textContent = "Sondaj: Ce cred moldovenii despre inteligența artificială";
divNews.append(imgNews);
divNews.append(h3News);
newsList.append(divNews);

toLink("1", "https://www.latimes.com/science");
toLink("2", "https://www.w3schools.com/css/css_border.asp");

