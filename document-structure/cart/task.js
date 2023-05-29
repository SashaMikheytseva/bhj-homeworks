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

productAdd.forEach((elem) => {
    elem.addEventListener('click', () => {
        const cart = Array.from(cartProducts.querySelectorAll('.cart__product'));
        for (let el of cart) {
            if (el.dataset.id == elem.closest('.product').dataset.id) {
                const quantityCart = Number(el.querySelector('.cart__product-count').textContent);
                const quantityPlus = Number(elem.closest('.product').querySelector('.product__quantity-value').textContent);
                el.querySelector('.cart__product-count').textContent = quantityCart + quantityPlus;
                return;
            }
        }
         
        
        const product = elem.closest('.product');
        
        cartProducts.insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
            </div>`);
    });
});