/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const cartBadge = document.getElementById('cartCount');
    const productButtons = document.querySelectorAll('.emerald-card .btn');

    productButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            count++;
            if (cartBadge) {
                cartBadge.textContent = count;
                cartBadge.classList.add('animate__animated', 'animate__pulse');
            }

            const originalText = button.textContent;
            button.innerHTML = '<i class="bi-check-circle-fill me-1"></i> Ditambahkan';
            button.classList.add('disabled');

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('disabled');
            }, 1200);
        });
    });
});
