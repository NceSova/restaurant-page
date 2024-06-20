import img1 from "./images/dish-1.jpg";
import img2 from "./images/dish-2.jpg";
import img3 from "./images/dish-3.jpg";
import img4 from "./images/dish-4.jpg";

export default function getMenuDiv() {
  const imgArray = [img1, img2, img3, img4];
  const nameArray = [
    "Боул с курицей",
    "Боул с авокадо и лимоном",
    "Боул с рисом",
    "Боул с креветками",
  ];
  const descArray = [
    "Curabitur eget dapibus erat. Etiam pulvinar consectetur justo ut pretium. Morbi eget tellus condimentum, vehicula.",
    "Nam congue elementum nulla eget tempor. Fusce aliquam nisi lorem. Duis tincidunt quam magna, nec.",
    "In fringilla ultrices justo, quis molestie erat maximus eu. Sed sit amet mauris et dolor.",
    "Nam ac tincidunt libero, in semper risus. Integer vehicula, purus eget volutpat feugiat, enim sem.",
  ];
  const priceArray = ["502", "467", "630", "749"];

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-content";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";
  for (let index = 0; index < imgArray.length; index++) {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const itemImg = document.createElement("img");
    itemImg.className = "item-img";
    itemImg.src = imgArray[index];
    itemImg.width = 200;
    itemImg.height = 200;

    const itemDesc = document.createElement("p");
    itemDesc.className = "item-desc";
    itemDesc.innerText = descArray[index];

    const itemName = document.createElement("p");
    itemName.className = "item-name";
    itemName.innerText = nameArray[index].toUpperCase();

    const itemPrice = document.createElement("p");
    itemPrice.className = "item-price";
    itemPrice.textContent = priceArray[index] + "₽";

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);
    menuItem.appendChild(itemPrice);
    menuGrid.appendChild(menuItem);
  }
  menuDiv.appendChild(menuGrid);
  return menuDiv;
}
