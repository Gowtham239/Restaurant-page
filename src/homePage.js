// homePage.js
import hotelImage from "./restaurant.jpg";
import menu from "./menuPage.js";

function home(content) {  
    // Set body and html to remove scrollbars and fill entire viewport
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    document.body.style.background = `url(${hotelImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";


    const div = document.createElement("div");
    div.classList.add("container");
    content.appendChild(div);

    const h1 = document.createElement("h1");
    h1.classList.add("heading")
    h1.textContent = "Thin Crust Pizza";
    div.appendChild(h1);

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menuBtn");
    menuBtn.id = "menu";
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        menu(content);
        console.log(e.target);
    });
    div.appendChild(menuBtn);
}

export default home;