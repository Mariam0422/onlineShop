import { withFetch } from './helpers.js';
import { API_URL } from './utlis.js';
import { setQueryParam } from './queryParams.js';
import { sliderImages } from './db.js';

const productContainer = document.getElementById('productContainer');
const slideCotainer = document.getElementById('slider');
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');


(function() {
    fetch(API_URL)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        data.forEach((item) => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const a = document.createElement('a');
            a.innerText = `${item.name}`;
            img.src = item.preview;
            a.className = 'product_card'
            a.href = `/productDetail.html?productId=${item.id}`; 
            a.dataset.id = item.id
            productContainer.appendChild(a);
            a.appendChild(div);
            div.appendChild(img)
            
        })
    })

})()

let index = 0;

(function slider() {
    slideLeft.addEventListener('click', e => {
        if(index === 0){
            index = sliderImages.length
        }
        index--
        slideCotainer.style.backgroundImage = `url(${sliderImages[index]})`        
    })      
    slideRight.addEventListener('click', e => {
        index++
        if(index === sliderImages.length) {
            index = 0
        }
        slideCotainer.style.backgroundImage = `url(${sliderImages[index]})`
    })
})()
