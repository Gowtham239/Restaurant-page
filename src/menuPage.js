
// menuPage.js

const menuCatogories = [
    {
        text: "PIZZA",
        id: "pizza" 
    },
    {
        text: "SALADS",
        id: "salads" 
    },
    {
        text: "STATARS",
        id: "statars" 
    }
];


const menuItems = [
    {
        item: "Margherita",
        price: "$12.50",
        itemRecipie: "Fresh tomatoes, fresh mozzarella, fresh basil"
    },
    {
        item: "Formaggio",
        price: "$15.50",
        itemRecipie: "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)"
    },
    {
        item: "Chicken",
        price: "$17.00",
        itemRecipie: "Fresh tomatoes, mozzarella, chicken, onions"
    },
    {
        item: "Pineapple'o'clock",
        price: "$16.50",
        itemRecipie: "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil"
    },
    {
        item: "Meat Town",
        price: "$20.00",
        itemRecipie: "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken"
    },
    {
        item: "Parma",
        price: "$21.50",
        itemRecipie: "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula"
    }
]

function menu(content) {
    // Reset body styles 
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.background = "none";
    document.body.style.backgroundColor = "black";

     // Clear previous content
    content.innerHTML = "";

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("the-menu");
    content.appendChild(menuTitle);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "The Menu";
    menuTitle.appendChild(title);

    // menu div
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    content.appendChild(menuDiv);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    menuDiv.appendChild(buttonContainer);


    // menu catogories
    menuCatogories.forEach((catogories) => {
        const catogorieBtn = document.createElement("button");
        catogorieBtn.classList.add("menuBtn");
        catogorieBtn.id = catogories.id;
        catogorieBtn.textContent = catogories.text;
        buttonContainer.appendChild(catogorieBtn);
    });

    // menu list
    
    const itemsContainer = document.createElement("ul");
    menuDiv.appendChild(itemsContainer);

    menuItems.forEach(itemsList => {
    const items = document.createElement("li");
    items.classList.add("items");
    itemsContainer.appendChild(items);

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("lineBreak"); // You can apply styles to this div
    itemsContainer.appendChild(lineBreak);


    const listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");
    items.appendChild(listDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv")
    listDiv.appendChild(itemsDiv);

    const itemTitle = document.createElement("h1");
    itemTitle.textContent = itemsList.item;
    itemsDiv.appendChild(itemTitle);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("price");
    itemPrice.textContent = itemsList.price;
    itemsDiv.appendChild(itemPrice);

    const recipie = document.createElement("p");
    recipie.classList.add("recipie");
    recipie.textContent = itemsList.itemRecipie;
    listDiv.appendChild(recipie);
    })
}

export default menu;