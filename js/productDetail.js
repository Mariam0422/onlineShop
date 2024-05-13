import { getQueryParam } from "./queryParams.js";
import { tagCreator } from "./helpers.js";
const productId = getQueryParam('productId');
const product = document.getElementById('product')
const productImage = document.querySelector('#product img');



fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
.then((resp) => {
    return resp.json();
})
.then(data => {
    productImage.src = data.preview;
    tagCreator('div', '#product');
    tagCreator('h2', '#product div', data.brand);
    tagCreator('h2', '#product div', data.name);
    tagCreator('p', '#product div', data.description);
    tagCreator('h3', '#product div', `$ ${data.price}`);

    const imagesContainer = tagCreator('div', '#product div');
    imagesContainer.addEventListener('click', (event) => {
        if(event.target !== 'img') {
            // return
        } 
        productImage.src = event.target.src
        
    } )
    imagesContainer.style.display = 'flex'

    data.photos.forEach(element => {
        const img = tagCreator('img', '#product div div')
        img.src = element
    });

})