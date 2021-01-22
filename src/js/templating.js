import productArray from '../menu.json';
import productCard from '../templates/products-gallery.hbs';

const menuListRef = document.querySelector('.js-menu');

const productsMarcup = productCard(productArray);

menuListRef.insertAdjacentHTML('beforeend', productsMarcup);