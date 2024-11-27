// Example: Handle order button click
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for your order! We will process it soon.');
    });
});
