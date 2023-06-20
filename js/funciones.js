function guardarProductosLocalStorage(){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLocalStorage(){
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLocalStorage(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLocalStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


function buscarProd(id){
    const productos = cargarProductosLocalStorage();
    return productos.find(item => item.id === id);

}

function agregarProd(id) {
    const carrito = cargarCarritoLocalStorage();
    const producto = buscarProd(id);
    carrito.push(producto);
    guardarCarritoLocalStorage(carrito);
    renderBotonCarrito();
    renderProducto();
}

function eliminarProd(id) {
    const carrito = cargarCarritoLocalStorage();
    const nuevoCarr = carrito.filter(item => item.id != id)
    guardarCarritoLocalStorage(nuevoCarr);
}

function cantidadTotalProd() {
    const carrito = cargarCarritoLocalStorage();
    return carrito.length;
}

function sumaTotalProd() {
    const carrito = cargarCarritoLocalStorage();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

function verProd(id){
    const producto = buscarProd(id);
    localStorage.setItem("producto", JSON.stringify(producto));
}

function renderBotonCarrito() {
    let botonCarr = document.getElementById("botonCarr");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="images/cart4.svg" alt="Carrito" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProd()}
    </span>
    </button>`;
    botonCarr.innerHTML = contenido;    
}