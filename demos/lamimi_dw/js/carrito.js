let cart = [];
    let total = 0;

    // Precios por talla
    const prices = {
        'S': 7500,
        'M': 8500,
        'L': 9500
    };

    // Función para agregar el collar al carrito
    function addToCart(productName) {
        const size = document.getElementById('size').value;
        const color = document.getElementById('color').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        // Obtener el precio según la talla
        const price = prices[size];

        const item = {
            name: productName,
            price: price,
            size: size,
            color: color,
            quantity: quantity,
            totalPrice: price * quantity
        };

        cart.push(item);
        updateCart();

        Swal.fire({
            title: '¡Producto añadido!',
            text: `${item.name} (${item.size}, ${item.color}, Cantidad: ${item.quantity}) ha sido añadido al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    // Función para eliminar productos del carrito
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();

        Swal.fire({
            title: '¡Producto eliminado!',
            text: `El producto ha sido eliminado del carrito.`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }

    // Función para actualizar el carrito y el total
    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Limpiar el contenido actual del carrito
        cartItemsContainer.innerHTML = '';

        // Variables para calcular el total
        total = 0;

        // Crear los elementos de carrito
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} (${item.size}, ${item.color})</span>
                <span>₡${item.price} x ${item.quantity} = ₡${item.totalPrice}</span>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.totalPrice;
        });

        // Actualizar el total
        totalPriceElement.textContent = `₡${total}`;
    }

    // Función para finalizar la compra y mostrar la factura
    function finalizarCompra() {
        if (cart.length === 0) {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No tienes productos en tu carrito.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        let factura = '';
        cart.forEach(item => {
            factura += `<p><strong>${item.name}</strong><br>Talla: ${item.size}, Color: ${item.color}, Cantidad: ${item.quantity}<br>Precio total: ₡${item.totalPrice}</p>`;
        });

        factura += `<hr><p><strong>Total de la compra: ₡${total}</strong></p>`;

        Swal.fire({
            title: 'Factura',
            html: factura,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el carrito después de la compra
        cart = [];
        updateCart();
    }