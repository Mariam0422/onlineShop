const href = window.location.href;
const idIndex = href.indexOf("?");
const id = href.slice(idIndex + 1);
const detailsSection = document.getElementById("detailsSection");
fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data)
    const div = document.createElement("div");
    div.classList.add("detailsDiv")
    div.innerHTML = `
    <img src="${data.photos[0]}" alt="">
    <div>
    <h2>${data.name}</h2>
    <h3>${data.brand}</h3>
    <h3>${data.price} AMD</h3>
    <p>${data.description}</p>    
    </div>
    `
    detailsSection.appendChild(div);
  });

