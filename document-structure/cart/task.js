const cartProducts = document.querySelector('.cart__products');
const productQuantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));

//увеличиваем-уменьшаем количество товара
productQuantityControl.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (elem.classList.contains('product__quantity-control_inc')) {
            let productQuantityValue = elem.previousElementSibling;
            productQuantityValue.textContent++;
        }
        if (elem.classList.contains('product__quantity-control_dec')) {
            let productQuantityValue = elem.nextElementSibling;
            if (productQuantityValue.textContent < 2) {
                return;
            }
            productQuantityValue.textContent--;
        } 
    });
});

//добавляем в корзину
const productAdd = Array.from(document.querySelectorAll('.product__add'));
productAdd.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const target = event.target;
        const product = target.closest('.product');
        const productId = product.dataset.id;
        const productInCart = Array.from(document.querySelectorAll('.cart__product'));
        const currentProduct = productInCart.find(elem => elem.dataset.id === productId);
        const productQuantity = Number(product.querySelector('.product__quantity-value').textContent);

        if (currentProduct) {
            let cartQuantity = Number(currentProduct.querySelector('.cart__product-count').textContent) + productQuantity;
            currentProduct.querySelector('.cart__product-count').textContent = cartQuantity;
        } else {
            cartProducts.insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
            </div>`);
        }
    });
});
