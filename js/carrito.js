function renderProductos(){
    let prod = cargarCarritoLocalStorage();
    let contenido = `<table class="table">`;

        prod.forEach(producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="30"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><b>$${producto.precio}</b></td>
            <td class="align-middle text-end"><img src="images/trash3.svg" alt="Eliminar Producto" title="Eliminar Producto" width="30" onclick="eliminarProd(${producto.id});"></td>
            </tr>`;
        });
        contenido += `<tr>
        <td>&nbsp;</td>
        <td>Saldo Total</td>
        <td><b>$${sumaTotalProd()}</b></td>    
        <td>&nbsp;</td>
        </tr>
        </table>`;

    
    document.getElementById("contenido").innerHTML = contenido; 

}

renderProductos();
renderBotonCarrito();