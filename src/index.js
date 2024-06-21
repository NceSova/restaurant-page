import "./index.css";
import getAboutDiv from "./about.js";
import getMenuDiv from "./menu.js";
import getContactsDiv from "./contacts.js";

const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(getAboutDiv());

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
      mainContainer.innerHTML = "";
      mainContainer.appendChild(getContactsDiv());
      break;
    default:
      return;
      break;
  }
});
