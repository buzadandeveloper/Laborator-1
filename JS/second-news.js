// Second News Container
let newsSecond = document.querySelector(".container-second");

let divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

let imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/apps-img.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText = document.createElement("div");
divInfoText.setAttribute("id", "1");
divInfoText.classList.add("info-text");

let h2Title = document.createElement("h2");
h2Title.textContent = "Ce funcție obligatorie WhatsApp are de implementat";

divSecondNews.append(imgSecondNews);
divInfoText.append(h2Title);
divInfoText.append(h2Title);
divSecondNews.append(divInfoText);

newsSecond.append(divSecondNews);
// --------------------------------------------------------------------
// newsSecond = document.querySelector(".container-second");

divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/chat-gpt-memory.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText2 = document.createElement("div");
divInfoText2.setAttribute("id", "2");
divInfoText2.classList.add("info-text");

h2Title = document.createElement("h2");
h2Title.textContent = "În curând, ChatGPT ar putea memora date despre utilizatorii săi";

divSecondNews.append(imgSecondNews);
divInfoText2.append(h2Title);
divInfoText2.append(h2Title);
divSecondNews.append(divInfoText2);

newsSecond.append(divSecondNews);
//-------------------------------------------------------------------------
// newsSecond = document.querySelector(".container-second");

divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/chat-gpt2.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText3 = document.createElement("div");
divInfoText3.setAttribute("id", "3");
divInfoText3.classList.add("info-text");

h2Title = document.createElement("h2");
h2Title.textContent = "Sondaj: Ce cred moldovenii despre inteligența artificială";

divSecondNews.append(imgSecondNews);
divInfoText3.append(h2Title);
divInfoText3.append(h2Title);
divSecondNews.append(divInfoText3);

newsSecond.append(divSecondNews);
