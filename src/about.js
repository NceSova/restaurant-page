import png from "./about.png";

export default function getAboutDiv() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const aboutText = document.createElement("h1");
  aboutText.classList.add("about-text");
  aboutText.innerHTML = "Любовь <br>с первого взгляда";

  const aboutSubtext = document.createElement("h3");
  aboutSubtext.classList.add("about-subtext");
  aboutSubtext.textContent =
    "Попробовав наши блюда, вы больше не сможете представить свою жизнь без них";

  const aboutImage = document.createElement("div");
  aboutImage.classList.add("about-image");

  const img = document.createElement("img");
  img.src = png;
  img.height = 300;
  img.width = 300;

  aboutImage.appendChild(img);
  aboutContainer.appendChild(aboutText);
  aboutContainer.appendChild(aboutSubtext);
  aboutContainer.appendChild(aboutImage);
  aboutDiv.appendChild(aboutContainer);
  return aboutDiv;
}
