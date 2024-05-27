$(function () {
    $(".banner-section_slider").slick({
        dots: true,
        prevArrow:
            '  <button class="banner-section_slider-btn banner-section_slider-btnprev "><img src="../images/arrow_left.svg" alt=""></button>',
        nextArrow:
            '  <button class="banner-section_slider-btn banner-section_slider-btnnext "><img src="../images/arrow_right.svg" alt=""></button>',
    });

    $(".tab").on("click", function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass("tab-active");
        $($(this).parent().siblings().find("div")).removeClass(
            "tabs-content-active",
        );

        $(this).addClass("tab-active");
        $($(this).attr("href")).addClass("tabs-content-active");
    });

    $(".product-item_favorite").on("click", function () {
        $(this).toggleClass("product-item_favorite-active");
    });

    $(".product-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '  <button class="product-slider_slider-btn product-slider_slider-btnprev "><img src="../images/arrow-black_left.svg" alt=""></button>',
        nextArrow:
            '  <button class="product-slider_slider-btn product-slider_slider-btnnext "><img src="../images/arrow-black_right.svg" alt=""></button>',
    });

    $(".filter-style").styler();

    $(".filter_item-drop, .filter_extra").on("click", function () {
        $(this).toggleClass("filter_item-drop-active");
        $(this).next().slideToggle("200");
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.catalog_filter-btngrid').on('click', function () {
        $(this).addClass('catalog_filter-button-active');
        $('.catalog_filter-btnline').removeClass('catalog_filter-button-active');
        $('.product-item_wrapper').removeClass('product-item_wrapper-list');

    });

    $('.catalog_filter-btnline').on('click', function () {
        $(this).addClass('catalog_filter-button-active');
        $('.catalog_filter-btngrid').removeClass('catalog_filter-button-active');
        $('.product-item_wrapper').addClass('product-item_wrapper-list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1c62cd",
        spacing: "7px",
        normalFill: "#C4C4C4"

    });

});
