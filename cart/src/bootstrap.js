import faker from 'faker';

const mount = (el) => {
    let cartText = `<div>You have ${faker.random.number()} items in your cart`;

    el.innerHTML = cartText;
}

// check if app is running in dev mode
if (process.env.NODE_ENV === 'development') {
    // check if app is running in isolation
    const el = document.querySelector('#cart-dev');

    // if element exists, consider we are running app in isolation
    // assuming our container doesn't have an element with id 'dev-products'
    if (el) {
        mount(el);
    }
}

export { mount };