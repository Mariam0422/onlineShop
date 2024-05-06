const href = window.location.href;
const idIndex = href.indexOf("?");
const id = href.slice(idIndex + 1);
const detailsSection = document.getElementById("detailsSection");
fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("detailsDiv");
    div.innerHTML = `
    <img class = "mainImg" src="${data.photos[0]}" alt="">
    <div class="description">
    <h2>${data.name}</h2>
    <h4>${data.brand}</h4>
    <h3>${data.price} AMD</h3>
    <h3>Description</h3>
    <p>${data.description}</p>     
    <h3>Product Preview</h3>
    </div> 
    `;
    detailsSection.appendChild(div);
    const descriptionDiv = document.querySelector(".description");
    const mainImg = document.querySelector(".mainImg");
    data.photos.forEach((photo) => {
      const img = document.createElement("img");
      img.classList.add("mini");
      img.src = photo;
      img.alt = "Product Preview";
      descriptionDiv.appendChild(img);
    });
    descriptionDiv.addEventListener("click", (e) => {
      if ((e.target.tagName === "IMG")) {
        mainImg.src = e.target.src;
      }     
    });
  });
