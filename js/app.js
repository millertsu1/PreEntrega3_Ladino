const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
<div class="card" >
    <img src="${product.img}" class="card-img-top" alt="${product.nombre}">
    <div class="card-body">
          <h4 class="card-title">${product.nombre}</h4>
          <p class="card-description">
          <span>Descripcion:</span>  ${product.descripcion}
          </p>
          <p class="card-text">
          <span>Precio:</span> $ ${product.precio}
          </p>        
    </div>
</div>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Agregar al Carrito";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
/* toastify */
Toastify({
  text: "Agregaste un producto al carrito",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #000)",
    border: "3px solid #fff"
  },
  offset: {
    x: 800, 
    y: 100
  }
}).showToast();

  });
});


const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
