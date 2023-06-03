let xhr = new XMLHttpRequest();
const imgLoader = document.querySelector('.loader');
const items = document.querySelector('#items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
    if (xhr.readyState !== xhr.DONE) {
        return;
    }

    if (xhr.readyState === xhr.DONE) {
        imgLoader.classList.remove('loader_active');
        const currencyData = xhr.response.response.Valute;

        
        for (let elem in currencyData) {
            items.insertAdjacentHTML('beforeend', 
                `<div class="item">
                    <div class="item__code">
                        ${elem}
                    </div>
                    <div class="item__value">
                        ${currencyData[elem].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`);
        }
        
    }
}

