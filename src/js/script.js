window.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function () {
        const slider = $("#slider_section").owlCarousel({
            center: false,
            nav: true,
            items: 2,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 6000,
            loop: true,
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3
                },
                768: {
                    items: 2
                },
                320: {
                    items: 1
                }
            }
        });
    });

    $(document).ready(function () {
        const slider = $("#slider_review").owlCarousel({
            center: false,
            nav: true,
            items: 2,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 6000,
            loop: true,
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3
                },
                // 768: {
                //     items: 2
                // },
                576: {
                    items:2
                },
                320: {
                    items: 1
                }
            }
        });
    });

    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    let subheader = document.querySelectorAll('.card_subheader'),
        headers = document.querySelectorAll('.card_header');

    headers.forEach(header => {
        header.addEventListener("click", () => {
            subheader = header.parentNode.querySelectorAll('.card_subheader')[0];
            subheader.classList.toggle('card_subheader_active');
        })
    })


})