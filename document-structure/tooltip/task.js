const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((el) => {
    el.insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
    el.addEventListener('click', (event) => {
        event.preventDefault();
        let tooltip = el.nextElementSibling;
        tooltip.textContent = el.getAttribute('title');
        //tooltip.classList.toggle('tooltip_active');

        const elemLeft = el.getBoundingClientRect().left;
        tooltip.setAttribute("style", `left: ${elemLeft}px; position: absolute`);

        if(tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
        } else {
            onlyOneTooltip();
            tooltip.classList.add('tooltip_active');
        }

    });
});

function onlyOneTooltip() {
    const tips = document.querySelectorAll('.tooltip_active');
    tips.forEach((elem) => {
        elem.classList.remove('tooltip_active');
    })
}

