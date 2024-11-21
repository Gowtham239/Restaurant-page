
// menuPage.js
import menuList from "./menuList.js";

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
        itemRecipie: "Fresh tomatoes, fresh mozzarella, fresh basil",
        category: "pizza"
    },
    {
        item: "Formaggio",
        price: "$15.50",
        itemRecipie: "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)",
        category: "pizza"
    },
    {
        item: "Chicken",
        price: "$17.00",
        itemRecipie: "Fresh tomatoes, mozzarella, chicken, onions",
        category: "pizza"
    },
    {
        item: "Pineapple'o'clock",
        price: "$16.50",
        itemRecipie: "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil",
        category: "pizza"
    },
    {
        item: "Meat Town",
        price: "$20.00",
        itemRecipie: "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken",
        category: "pizza"
    },
    {
        item: "Parma",
        price: "$21.50",
        itemRecipie: "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula",
        category: "pizza"
    }, 
    {
        item: "Lasagna",
        price: "$13.50",
        itemRecipie: "Special sauce, mozzarella, parmesan, ground beef",
        category: "salads"
    },
    {
        item: "Ravioli",
        price: "$14.50",
        itemRecipie: "Ravioli filled with cheese",
        category: "salads"
    },
    {
        item: "Seafood pasta",
        price: "$25.50",
        itemRecipie: "Salmon, shrimp, lobster, garlic",
        category: "salads"
    },
    {
        item: "Spaghetti Classica",
        price: "$11.00",
        itemRecipie: "Fresh tomatoes, onions, ground beef",
        category: "salads"
    },
    {
        item: "Today's Soup",
        price: "$5.50",
        itemRecipie: "Ask the waiter",
        category: "statars"
    },
    {
        item: "Bruschetta",
        price: "$8.50",
        itemRecipie: "Bread with pesto, tomatoes, onion, garlic",
        category: "statars"
    },
    {
        item: "Garlic bread",
        price: "$9.50",
        itemRecipie: "Grilled ciabatta, garlic butter, onions",
        category: "statars"
    },
    {
        item: "Tomozzarella",
        price: "$10.50",
        itemRecipie: "Tomatoes and mozzarella",
        category: "statars"
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

    // container for menu items
    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("itemsContainer");
    menuDiv.appendChild(itemsContainer)

    // menu catogories
    menuCatogories.forEach((catogories) => {
        const catogorieBtn = document.createElement("button");
        catogorieBtn.classList.add("menuBtn");
        catogorieBtn.setAttribute("data-tab-target", catogories.id)
        catogorieBtn.id = catogories.id;
        catogorieBtn.textContent = catogories.text;
        catogorieBtn.addEventListener("click", () => {

            document.querySelectorAll(".menuBtn").forEach(btn => btn.classList.remove("active"));
            catogorieBtn.classList.add("active");

            const filteredMenu = menuItems.filter(item => item.category === catogories.id);
            console.log(filteredMenu);
            menuList(filteredMenu, itemsContainer);
        })
        buttonContainer.appendChild(catogorieBtn);
    });

    const defaultMenu = menuItems.filter(item => item.category === "pizza");
    menuList(defaultMenu, itemsContainer);

    const pizzaButton = document.querySelector('[data-tab-target="pizza"]');
    if (pizzaButton) {
        pizzaButton.classList.add("active");
    }
}

export default menu;