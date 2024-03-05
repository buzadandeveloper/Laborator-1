import { toLink } from "./toLinks.js";
// Third News Container
let newsThird = document.querySelector(".container-third");

function createNews(id, imgPaths, altText, titleText){
    let divNews = document.createElement("div");
    divNews.classList.add("news");
    divNews.setAttribute("id", id);

    let imgNews = document.createElement("img");
    imgNews.setAttribute("src", imgPaths);
    imgNews.setAttribute("alt", altText);

    divNews.append(imgNews);

    let divInfoText = document.createElement("div");
    divInfoText.classList.add("info-text");

    let h3Title = document.createElement("h3");
    h3Title.textContent = titleText;

    divInfoText.append(h3Title);
    divNews.append(divInfoText);

    return divNews;
}

let thirdOne = document.createElement("div");
thirdOne.classList.add("third-one");

let thirdTwo = document.createElement("div");
thirdTwo.classList.add("third-two");

thirdOne.append(createNews("4", "/image/facebook.jpg", "facebook-img", "Facebook: Dintr-o cameră de cămin de la Harvard la un fenomen global"));
thirdOne.append(createNews("5", "/image/elon-musk.jpg", "elon-musk-img", "Ce avere are Elon Musk. Câţi bani câştigă fondatorul Tesla și SpaceX"));

thirdTwo.append(createNews("6", "/image/nasa.jpg", "mars-img", "NASA caută patru voluntari pentru o simulare de un an a vieţii pe Marte"));
thirdTwo.append(createNews("7", "/image/bill-gates.jpg", "bill-gates-img", "Bill Gates explică cum inteligența artificială va schimba viața oamenilor"));

newsThird.append(thirdOne);
newsThird.append(thirdTwo);

toLink("4", "#");
toLink("5", "#");
toLink("6", "#");
toLink("7", "#");
