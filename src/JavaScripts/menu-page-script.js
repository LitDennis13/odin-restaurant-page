import { contentPortion,clearContent,resetBGs } from "./home-page-script";

const menuButton = document.querySelector("#menu-button");
export {menuButton};


menuButton.addEventListener("click", () => {
    clearContent();
    resetBGs();
    loadMenuPage();
});


function loadMenuPage() {
    menuButton.style.backgroundColor = "rgb(167,27,1)";
    contentPortion.innerHTML = `<div id="content-menu-page">
    <h1>Epic Burgers</h1>
    <div id="burgerOptions">
        <h1>Menu</h1>
            <div id="options">
            <div id="burger-choice">
                <h1>Turkey Burger</h1>
                <img src="${require('../Images/turkeyburger.jpeg')}" alt="Bacon Burger Picture"/>
                <h2>$6.99</h2>
                <button>Order Now</button>
            </div>

            <div id="burger-option">
                <h1>Bacon Burger</h1>
                <img src="${require('../Images/maplebaconburger.jpg')}" alt="Bacon Burger Picture"/>
                <h2>$4.99</h2>
                <button>Order Now</button>
            </div>


            <div id="burger-choice">
                <h1>Fish Burger</h1>
                <img src="${require('../Images/fishburger.jpeg')}" alt="Bacon Burger Picture"/>
                <h2>$1.99</h2>
                <button>Order Now</button>
            </div>


            <div id="burger-option">
                <h1>Cheese Burger</h1>
                <img src="${require('../Images/cheeseburger.jpeg')}" alt="Cheese Burger Picture"/>
                <h2>$2.49</h2>
                <button>Order Now</button>
            </div>

            <div id="burger-choice">
                <h1>Whopper (real) </h1>
                <img src="${require('../Images/realwhopperburger.jpg')}" alt="Bacon Burger Picture"/>
                <h2>$10.99</h2>
                <button>Order Now</button>
            </div>


            <div id="burger-option">
                <h1>Ham Burger</h1>
                <img src="${require('../Images/ham-burger.jpeg')}"/>
                <h2>$3.99</h2>
                <button>Order Now</button>
            </div>
        </div>
    </div>
</div>`;
}