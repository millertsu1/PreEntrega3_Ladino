fetch("./js/productos.json")
  .then((res) => res.json())
  .then((response) => {
    /* console.log(response); */
    response.forEach((product) => {
      const article = document.createRange().createContextualFragment(
        `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${product.img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
  </div>
</div>
          `
      );
      const main = document.querySelector("main");

      main.append(article);
    });
  });
