const modalController =({modal,btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape') {
            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
            console.log('нажали esc');
        }
    };

    
    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    })

    // buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal)
}

modalController({
    modal: '.modal1',
    btnOpen: '.section__button1', 
    btnClose: '.modal__close',
    time: '2000'
});

modalController({
    modal: '.modal2',
    btnOpen: '.section__button2',
    btnClose: '.modal__close'
});