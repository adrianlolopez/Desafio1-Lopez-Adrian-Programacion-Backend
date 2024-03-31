let products = [];

// Agrega un nuevo producto a la lista
// Parámetros

const addProduct = (title, description, price, thumbnail, code, stock) => {

    const newProduct = {
        // Crea un nuevo objeto con los detalles del producto
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

    // Verifica si algún campo del producto está indefinido
    if(Object.values(newProduct).includes(undefined)) {
        console.log("Todos los campos son obligatorios");
        return;
    }

    // Verifica si ya existe un producto con el mismo código
    const productFail = products.find( product => product.code === code);
    if(productFail) {
        console.log(`El producto ${title} con el código ${code} ya existe`);
        return;
    }

    // Agrega el nuevo producto a la lista de productos
    products.push(newProduct);

}

// Imprime la lista de productos
const getProducts = () => {
    console.log(products);
    return products;
}

// Busca un producto por su ID y lo imprime
// Parámetros:
//   id: ID del producto a buscar
const getProductById = (id) => {
    // Busca el producto en la lista por su ID
    const product = products.find(  product => product.id === id);
    // Si no encuentra el producto, muestra un mensaje de error
    if(!product) {
        console.log(`No se encontró el producto con el id ${id}`);
        return;
    }

    // Si encuentra el producto, lo imprime
    console.log(product);
    return product;
};

// Pruebas de las funciones
// TEST

addProduct("iPhone 11", "iPhone 11: Potente, versátil y elegante. Captura momentos extraordinarios.", 700000, "http://www.apple.com", "ADF211", 21);
addProduct("iPhone 12", "Potente, elegante, y con 5G. El iPhone 12 redefine la experiencia móvil.", 900000, "http://www.apple.com", "ADF212", 7);
addProduct("iPhone 13", "iPhone 13: Potente, elegante, innovador. La esencia de la excelencia tecnológica.", 1200000, "http://www.apple.com", "ADF212", 7);
addProduct("iPhone 14", "iPhone 14: Potencia y elegancia redefinidas en tu mano.", 1300000, "http://www.apple.com", "ADF777", 7);
addProduct("iPhone 15", "iPhone 15: Potente, elegante y revolucionario.", 1800000, "http://www.apple.com", "ADF1414");

getProducts();

// getProductById(1);