import "./index.css";
import getAboutDiv from "./about.js";
import getMenuDiv from "./menu.js";

const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(getAboutDiv());

const getPage = (id) => {
  switch (id) {
    case "about":
      return getAboutDiv();
      break;
    case "menu":
      return getMenuDiv();
      break;
    case "contacts":
      return;
      break;
    default:
      return;
      break;
  }
};

const navMenu = document.querySelector(".links");
navMenu.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "about":
      mainContainer.innerHTML = "";
      mainContainer.appendChild(getAboutDiv());
      break;
    case "menu":
      mainContainer.innerHTML = "";
      mainContainer.appendChild(getMenuDiv());
      break;
    case "contacts":
      return;
      break;
    default:
      return;
      break;
  }
});
