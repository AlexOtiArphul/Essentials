const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} added to cart!`);
    });
    console.log('Button clicked'); // Inside the event listener

});

