const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));


function removeActive() {
    tabs.forEach((e) => {
        e.classList.remove('tab_active');
    });
    content.forEach((i) => {
        i.classList.remove('tab__content_active');
    })
}

tabs.forEach((e) => {
    e.onclick = () => {
        removeActive();
        e.classList.add('tab_active');
        content.forEach((i) => {
            if (content.indexOf(i) === tabs.indexOf(e)) {
                i.classList.add('tab__content_active');
            }
        });  
    }
});
