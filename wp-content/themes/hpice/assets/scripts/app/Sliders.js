import $ from 'jquery';
import Swiper, {Navigation, Pagination, EffectFade, Autoplay} from "swiper";
import resizeEvent from "../utilities/triggerResizeEvent";
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

function Sliders() {

    const initSwiper = (el, options) => {

        options.init = false;

        const carousel = new Swiper(el, options);

        carousel.on('init', () => {
            window.dispatchEvent(resizeEvent);
        });

        carousel.init();

        carousel.on('slideChangeTransitionEnd', () => {
            window.dispatchEvent(resizeEvent);
        });

    }

    $('.hero__carousel').each((_index, elem) => {
        initSwiper(elem, {
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: $(elem).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true
            },
        });
    });

    $('.post-carousel__items--post').each((_index, elem) => {
        initSwiper(elem, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            navigation: {
                nextEl: $(elem).find('.swiper-button-next')[0],
            },
        });
    });

    $('.post-carousel__items--service').each((_index, elem) => {
        initSwiper(elem, {
            slidesPerView: 1,
            spaceBetween: 60,
            navigation: {
                nextEl: $(elem).find('.swiper-button-next')[0],
                prevEl: $(elem).find('.swiper-button-prev')[0],
            },
            breakpoints: {
                1024: {
                  slidesPerView: 2,
                }
            }
        });
    });

};

export default Sliders;
