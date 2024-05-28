// Obtener todas las etiquetas de la lista de compras
const listaItems = document.querySelectorAll('.lista label');

// Iterar sobre cada etiqueta
listaItems.forEach(item => {
    // Agregar un evento de cambio a cada checkbox
    item.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        // Verificar si el checkbox está marcado
        if (this.checked) {
            // Mostrar un mensaje emergente al seleccionar un elemento de la lista de compras
            alert(`¡Se ha agregado al carrito: ${item.querySelector('span').textContent}!`);
        }
    });
});
