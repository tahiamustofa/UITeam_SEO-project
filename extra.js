document.querySelectorAll('.swiper-signposting').forEach(function (thisSlider) {
    const id = thisSlider.id; // make sure your slider element has a unique ID
    const slider = document.getElementById(id);
    const container = slider.parentElement;

    const swiper = new Swiper(slider, {
        a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
      navigation: {
            nextEl: container.querySelector('.swiperSignpostingNext'),
            prevEl: container.querySelector('.swiperSignpostingPrev'),
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
    });
});

document.querySelectorAll('.gallery .swiper-gallery').forEach(function (thisSlider) {
    const id = thisSlider.id; // make sure your slider element has a unique ID
    const slider = document.getElementById(id);
    const container = slider.closest('.gallery');

    const swiper = new Swiper(slider, {
        a11y: {
            enabled: true
        },
        navigation: {
            nextEl: container.querySelector('.swiperGalleryNext'),
            prevEl: container.querySelector('.swiperGalleryPrev'),
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
        },
    });
});


