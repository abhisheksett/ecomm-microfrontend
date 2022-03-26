import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

// load products
mount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'))