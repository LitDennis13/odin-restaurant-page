import { menuButton } from "./menu-page-script";
import { aboutButton } from "./about-page-script";
const homeButton = document.querySelector("#home-button");

const contentPortion = document.querySelector("#content");
function clearContent() {
    contentPortion.innerHTML = "";
}
function resetBGs() {
    let color = "rgb(214,34,1)";
    menuButton.style.backgroundColor = color;
    aboutButton.style.backgroundColor = color;
    homeButton.style.backgroundColor = "rgb(214,34,1)";
}
export {contentPortion,clearContent,resetBGs};


clearContent();
resetBGs();
loadHomePage();

homeButton.addEventListener("click", () => {
    clearContent();
    resetBGs();
    loadHomePage();
});



function loadHomePage() {
    homeButton.style.backgroundColor = "rgb(167,27,1)";
    contentPortion.innerHTML = `<div id="content-home-page">
    <h1>Epic Burgers</h1>
    <div id="popular-choices-section">
        <h1>Popular Choices</h1>
        <div id="choices">
            <div id="burger-choice">
                <h1>Bacon Burger</h1>
                <img src="${require('../Images/maplebaconburger.jpg')}" alt="Bacon Burger Picture"/>
                <h2>$4.99</h2>
                <button>Order Now</button>
            </div>

            <div id="burger-choice">
                <h1>Cheese Burger</h1>
                <img src="${require('../Images/cheeseburger.jpeg')}" alt="Cheese Burger Picture"/>
                <h2>$2.49</h2>
                <button>Order Now</button>
            </div>

            <div id="burger-choice">
                <h1>Ham Burger</h1>
                <img src="${require('../Images/ham-burger.jpeg')}" alt="Ham Burger Picture"/>
                <h2>$3.99</h2>
                <button>Order Now</button>
            </div>
        </div>
    </div>
</div>`;
}

