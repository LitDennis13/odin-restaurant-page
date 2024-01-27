import { clearContent,contentPortion,resetBGs } from "./home-page-script";

const aboutButton = document.querySelector("#about-button");
export {aboutButton};

aboutButton.addEventListener("click", () => {
    clearContent();
    resetBGs();
    loadAboutPage();
});


function loadAboutPage() {
    aboutButton.style.backgroundColor = "rgb(167,27,1)";
    contentPortion.innerHTML = `<div id="content-about-page">
    <h1>Epic Burgers</h1>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum ut at porro doloremque dolorum nihil unde eligendi officia. Minima praesentium cupiditate odio tenetur, amet deleniti illum incidunt fugit sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum ut at porro doloremque dolorum nihil unde eligendi officia. Minima praesentium cupiditate odio tenetur, amet deleniti illum incidunt fugit sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum ut at porro doloremque dolorum nihil unde eligendi officia. Minima praesentium cupiditate odio tenetur, amet deleniti illum incidunt fugit sed!</p>
</div>`;
}