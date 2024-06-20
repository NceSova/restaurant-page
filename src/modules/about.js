export default function getAboutDiv() {
  const aboutDiv = document.createElement("div");
  aboutDiv.id = "about-content";
  aboutDiv.innerHTML = `<div class="about-container">
          <h1 class="about-text">
            Любовь<br />
            с первого взгляда
          </h1>
          <h3 class="about-subtext">
            Попробовав наши блюда, вы больше не сможете представить свою жизнь
            без них
          </h3>
          <div class="about-image">
            <img src="images/mae-mu-Pvclb-iHHYY-unsplash.jpg"
              height="300px"
              width="300px" />
          </div>
        </div>
        <hr />
      </div>`;
  return aboutDiv;
}
