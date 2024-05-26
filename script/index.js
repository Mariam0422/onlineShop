import { withFetch } from "./helpers.js";
import { API_URL } from "./utils.js";

const product_container = document.getElementById("product_container");

(function () {
  fetch(API_URL)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("productCard");
        let itemName = item.name;
        if (itemName.length > 18) {
          itemName = itemName.substring(0, 18) + "...";
        }
        div.innerHTML = `
        <a href = /productDetail.html?productId=${item.id}>
        <img src="${item.photos[0]}" alt="">
        <h3>${itemName}</h3>
        <h4>${item.brand}</h4>
        <h2>${item.price}</h2>
        </a>
        `;
        product_container.appendChild(div);
      });
      console.log(data, "data");
    });
})();

// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const slideCount = slides.length;

// function nextSlide() {

//   slides[currentSlide].classList.remove('active');

//   currentSlide = (currentSlide + 1) % slideCount;

//   slides[currentSlide].classList.add('active');
// }

// nextSlide();
// setInterval(nextSlide, 2000);

const slider = [
  "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img1.png",
  "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img2.png",
  "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img3.png",
  "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img4.png",
];
function getCurrentSlide() {
  let count = 0;
  function getCount() {
    document.getElementById("slider").innerHTML = `<img src=${slider[count]}>`;
    return count;
  }
  function increment() {
    if (count === slider.length-1) {
      count = 0;
      getCount();
    } else if (count < slider.length) {
      count++;
      getCount();
    }
    console.log(count)
  }
  function decrement() {
    if(count === 0){
        count = slider.length-1;
        getCount();
    }
    else if(count > 0){
        count--;
        getCount();
    } 
    console.log(count)   
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

let result = getCurrentSlide();
result.increment();
document.getElementById("prev").addEventListener("click", () => {
  result.decrement();
});
document.getElementById("next").addEventListener("click", () => {
  result.increment();
});
