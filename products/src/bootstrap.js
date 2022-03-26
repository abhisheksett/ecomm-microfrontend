import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

// check if app is running in dev mode
if (process.env.NODE_ENV === 'development') {
    // check if app is running in isolation
    const el = document.querySelector('#dev-products');

    // if element exists, consider we are running app in isolation
    // assuming our container doesn't have an element with id 'dev-products'
    if (el) {
        mount(el);
    }
}

export { mount };