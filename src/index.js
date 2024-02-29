
import './index.html';
import './index.scss';
import './modules/script';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicsBullets: true,
    },
    slidesPerView: 'auto',
    //spaceBetween: 16,
});