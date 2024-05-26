import { getQueryParam, setQueryParam } from "./queryParam.js";
const href = window.location.href;
const idIndex = href.indexOf("?");
const productId = getQueryParam('productId');



const detailsSection = document.getElementById("detailsSection");
fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data)
    const div = document.createElement("div");
    div.classList.add("detailsDiv")
    div.innerHTML = `
    <img src="${data.photos[0]}" alt="">
    <div class="description">
    <h2>${data.name}</h2>
    <h4>${data.brand}</h4>
    <h3>${data.price} AMD</h3>
    <h3>Description</h3>
    <p>${data.description}</p>     
    <h3>Product Preview</h3>
    <img class="mini" src="${data.photos[0]}" alt="">
    <img class="mini" src="${data.photos[1]}" alt="">
    <img class="mini" src="${data.photos[2]}" alt="">
    </div> 
    `
    detailsSection.appendChild(div);
  });

