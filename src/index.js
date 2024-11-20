import "./style.css";
import home from "./homePage.js";
import menu from "./menuPage.js";
import aboutUs from "./aboutUsPage.js";

const content = document.querySelector("#content");

const buttons = document.querySelectorAll("button");

home(content);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "home") {
      content.innerHTML = "";
      home(content);
    } else if (e.target.id === "menu") {
      menu(content);
    } else {
      aboutUs(content);
    }
  });
});
