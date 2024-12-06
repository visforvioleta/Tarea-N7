// Gestor de Inventario de una Tienda
// Tienes un array de productos de una tienda, cada uno con información sobre su nombre, categoría, precio, cantidad en inventario y descuento. Tu tarea es trabajar con este inventario utilizando programación funcional y estructuras de control.

// ARREGLO - ARRAY DE PRODUCTOS

const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


// 1. Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos que tienen un descuento aplicado (es decir, discount > 0).

const productosConDescuento = products.filter(conDescuento => conDescuento.discount > 0)
console.table(productosConDescuento);


// 2. Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.

const productosPrecioFinal = productosConDescuento.map((producto) => {
    const priceAfterDiscount = producto.price - (producto.discount / 100) * producto.price;
    return {
        name: producto.name,
        category: producto.category,
        price: producto.price,
        stock: producto.stock,
        discount: producto.discount,
        priceAfterDiscount: priceAfterDiscount
    }
})
console.table(productosPrecioFinal);


// 3. Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.

const productosConStockBajo = []
for (const producto of products) {
    if (producto.stock < 5) {
        productosConStockBajo.push(producto)
    }
}
console.table(productosConStockBajo);


// 4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre de un producto y una cantidad a agregar. Usa un try...catch para verificar si el producto existe en el array. Si existe, incrementa su stock; si no, lanza un error.

function actualizarStockDeUnProducto(nombre, cantidadAAgregar) {
    let productoEncontrado;
    let productoExiste = false;

    try {
        for (const producto of products) {
            if (producto.name == nombre) {
                productoEncontrado = producto;
                productoExiste = true;
            }
        }

        if (productoExiste) {
            productoEncontrado.stock = productoEncontrado.stock + cantidadAAgregar
            console.log(productoEncontrado)
        } else {
            throw new Error("Producto no encontrado")
        }
    }

    catch (error) {
        console.error(error.message);
    }

}
actualizarStockDeUnProducto('Leche', 9);
actualizarStockDeUnProducto('Mantequilla', 9);


// 5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría (electrónica, hogar, alimentos) y devuelve un objeto con este resumen.

function cuentaProductosPorCategoria(){
    let conteoElectrónica = 0
    let conteoHogar = 0
    let conteoAlimentos = 0 

    for (const producto of products){
        let categoriaASumar = producto.category

        if (categoriaASumar === "electrónica"){
            conteoElectrónica++
        }
        else if (categoriaASumar === "hogar"){
            conteoHogar++
        }
        else if (categoriaASumar === "alimentos"){
            conteoAlimentos++
        }
    }
    return{
        electrónica: conteoElectrónica,
        hogar: conteoHogar,
        alimentos: conteoAlimentos,
    }
}
console.log("Resumen por categorías: ", cuentaProductosPorCategoria());