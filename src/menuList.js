// menuList.js

function menuList(filteredMenu, itemsContainer) {

    itemsContainer.innerHTML = "";

    const itemsList = document.createElement("ul");
    itemsContainer.appendChild(itemsList);

    filteredMenu.forEach(itemsListData => {
    const items = document.createElement("li");
    items.classList.add("items");
    itemsList.appendChild(items);

    const listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");
    items.appendChild(listDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv")
    listDiv.appendChild(itemsDiv);

    const itemTitle = document.createElement("h1");
    itemTitle.textContent = itemsListData.item;
    itemsDiv.appendChild(itemTitle);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("price");
    itemPrice.textContent = itemsListData.price;
    itemsDiv.appendChild(itemPrice);

    const recipie = document.createElement("p");
    recipie.classList.add("recipie");
    recipie.textContent = itemsListData.itemRecipie;
    listDiv.appendChild(recipie);
    })
}

export default menuList;