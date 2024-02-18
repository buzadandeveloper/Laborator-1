let newsList = document.querySelector(".news-container");
let divNews = document.createElement("div");
divNews.classList.add("news");
let aNews = document.createElement("a");
aNews.setAttribute("href", "#");
let imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/neural-link.jpg");
imgNews.setAttribute("alt", "brain-chip-img");
aNews.append(imgNews);
let h3News = document.createElement("h3");
h3News.textContent = "Neuralink a realizat primul implant în creierul uman";
divNews.append(aNews);
divNews.append(h3News);
newsList.prepend(divNews);

divNews = document.createElement("div");
divNews.classList.add("news");
aNews = document.createElement("a");
aNews.setAttribute("href", "#");
imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/chat-gpt.jpg");
imgNews.setAttribute("alt", "chat-gpt-img");
aNews.append(imgNews);
h3News = document.createElement("h3");
h3News.textContent = "Sondaj: Ce cred moldovenii despre inteligența artificială";
divNews.append(aNews);
divNews.append(h3News);
newsList.append(divNews);

