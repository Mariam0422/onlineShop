import { withFetch } from "./helpers.js";
import { API_URL } from "./utils.js";

const product_container = document.getElementById("product_container");

(function(){
fetch(API_URL)
.then((resp) => {
 return resp.json();
})
.then((data) => {
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("productCard");
        const a = document.createElement("a");
        let itemName = item.name;
        if(itemName.length > 23){
            itemName = itemName.substring(0, 20) + "..."
        }
        a.innerText = itemName;
        a.href = `/productDetails.html?${item.id}`;
        div.innerHTML = `
        <img src="${item.photos[0]}" alt="">
        `
        div.appendChild(a);
        product_container.appendChild(div);
    });
    console.log(data, "data")
})
})()

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function nextSlide() {

  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slideCount;

  slides[currentSlide].classList.add('active');
}

nextSlide();
setInterval(nextSlide, 2000);