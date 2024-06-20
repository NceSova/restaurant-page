import "./index.css";
import getAboutDiv from "./about.js";

const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(getAboutDiv());

const getPage = (id) => {
  switch (id) {
    case "about":
      return getAboutDiv();
      break;
    case "menu":
      return;
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
  mainContainer.innerHTML = "";
  mainContainer.appendChild(getPage(e.target.id));
});
