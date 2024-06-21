export default function getContactsDiv() {
  const contactsDiv = document.createElement("div");
  contactsDiv.className = "contacts-content";

  const contactsContainer = document.createElement("div");
  contactsContainer.className = "contacts-container";

  const contactsHeader = document.createElement("h3");
  contactsHeader.className = "contacts-header";
  contactsHeader.textContent = "Наши контакты";

  const contactsText = document.createElement("ul");
  contactsText.className = "contacts-text";
  contactsText.innerHTML = `
  <li>Телефон: +7-999-888-77-66</li>
  <li>Email: myRestaurant@host.ru</li>
  <li>Адрес: Г. Москва, ул. Кошек, 35/2</li>
  `;

  contactsContainer.appendChild(contactsHeader);
  contactsContainer.appendChild(contactsText);
  contactsDiv.appendChild(contactsContainer);
  return contactsDiv;
}
