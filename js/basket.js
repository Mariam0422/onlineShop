import { getQueryParam } from "./queryParams.js";




(function() {
    fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
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
