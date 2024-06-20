import "./index.css";
import getAboutDiv from "./about.js";

const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(getAboutDiv());
