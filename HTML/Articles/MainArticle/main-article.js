let newsList = document.querySelector(".news-container");
let divNews = document.createElement("div");
divNews.classList.add("news");
let imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/neural-link.jpg");
imgNews.setAttribute("alt", "brain-chip-img");
divNews.addEventListener("click", function(){
    window.location.href = "#";
});

let h3News = document.createElement("h3");
h3News.textContent = "Neuralink a realizat primul implant în creierul uman";
divNews.append(imgNews);
divNews.append(h3News);
newsList.prepend(divNews);
//--------------------------------------------------------------------------------------------
divNews = document.createElement("div");
divNews.classList.add("news");

divNews.addEventListener("click", function(){
    window.location.href = "#";
});

imgNews = document.createElement("img");
imgNews.setAttribute("src", "/image/chat-gpt2.jpg");
imgNews.setAttribute("alt", "chat-gpt-img");
imgNews.setAttribute("href", "#");

h3News = document.createElement("h3");
h3News.textContent = "Sondaj: Ce cred moldovenii despre inteligența artificială";
divNews.append(imgNews);
divNews.append(h3News);
newsList.append(divNews);

