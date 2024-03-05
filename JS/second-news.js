import { toLink } from "./toLinks.js";

let newsSecond = document.querySelector(".container-second");


function createSecondaryNews(id, imgPaths, altText, titleText) {
  let divSecondNews = document.createElement("div");
  divSecondNews.classList.add("news");
  divSecondNews.setAttribute("id", id);

  let imgSecondNews = document.createElement("img");
  imgSecondNews.setAttribute("src", imgPaths);
  imgSecondNews.setAttribute("alt", altText);

  let divInfoText = document.createElement("div");
  divInfoText.classList.add("info-text");
  let h2Title = document.createElement("h2");
  h2Title.textContent = titleText;

  divSecondNews.append(imgSecondNews);
  divInfoText.append(h2Title);
  divSecondNews.append(divInfoText);

  return divSecondNews;
}


newsSecond.append(createSecondaryNews("1", "/image/apps-img.jpg", "apps-img", "Ce funcție obligatorie WhatsApp are de implementat"));
newsSecond.append(createSecondaryNews("2", "/image/chat-gpt-memory.jpg", "chat-gpt-img","În curând, ChatGPT ar putea memora date despre utilizatorii săi"));
newsSecond.append(createSecondaryNews("3", "/image/chat-gpt2.jpg", "chat-gpt-img","Sondaj: Ce cred moldovenii despre inteligența artificială"));

toLink("1", "#");
toLink("2", "#");
toLink("3", "#");
