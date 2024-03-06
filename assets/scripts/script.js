$(window).on("load", function () {
    // Accordion Component
    if ($(".designpeer-accordion").length > 0) {
        $(".designpeer-accordion").each(function () {

            let $designpeerAccordion = $(this),
                $accordionTitle = $designpeerAccordion.find(".designpeer-tab-title"),
                $accordionType = $designpeerAccordion.data("accordion-type"),
                $accordionSpeed = $designpeerAccordion.data("toogle-speed");

            // Open default actived tab
            $accordionTitle.each(function () {
                if ($(this).hasClass("active-default")) {
                    $(this).parent().addClass("active");
                    $(this).addClass("show active");
                    $(this).next().slideDown($accordionSpeed);
                }
            });

            // Remove multiple click event for nested accordion
            $accordionTitle.unbind("click");

            $accordionTitle.click(function (e) {
                e.preventDefault();
                let $this = $(this);

                if ($accordionType === "accordion") {
                    if ($this.hasClass("show")) {
                        $this.removeClass("show active");
                        $this.parent().removeClass("active");
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $designpeerAccordion
                            .find(".designpeer-accordion-item")
                            .removeClass("active");
                        $this.parent().addClass("active");
                        $this
                            .parent()
                            .parent()
                            .find(".designpeer-tab-title")
                            .removeClass("show active");
                        $this
                            .parent()
                            .parent()
                            .find(".designpeer-tab-content")
                            .slideUp($accordionSpeed);
                        $this.toggleClass("show active");
                        $this.next().slideToggle($accordionSpeed);
                    }
                } else {
                    // For acccordion type 'toggle'
                    if ($this.hasClass("show")) {
                        $this.removeClass("show active");
                        $this.parent().removeClass("active");
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $this.addClass("show active");
                        $this.parent().addClass("active");
                        $this.next().slideDown($accordionSpeed);
                    }
                }
            });
        });
    }

    // ===================================================================

    if ($(".mobile-menu-btn")) {
        $(".mobile-menu-btn").on("click", function () {
            $(".mobile-menu").addClass("show");
        });
        $(".mobile-menu-close").on("click", function () {
            $(".mobile-menu").removeClass("show");
        });
    }
    // ===================================================================

    if ($(".mobile-search-btn")) {

        $(".mobile-search-btn").on("click", function () {
            $(".mobile-menu").addClass("show");
            setTimeout(function () {
                $(".header-search-box input").focus()
            }, 100);
        })
    }
    // ===================================================================

    if ($(".cur-lang")) {
        $(".cur-lang").on("mouseenter", function () {
            let th = $(this);
            th.find(".lang-curr-box").addClass("show");
        }).on("mouseleave", function () {
            let th = $(this);
            th.find(".lang-curr-box").removeClass("show");
        })

    }
    // ===================================================================


    if ($(".megamenu")) {
        function mobileMenu() {
            if (window.innerWidth > 1280) {
                $(".nav-item")
                    .on("mouseenter", function () {
                        if (window.innerWidth > 1280) {
                            $(this).find(".megamenu").addClass("show");
                        }
                    })
                    .on("mouseleave", function () {
                        $(this).find(".megamenu").removeClass("show");
                    });
            } else {
                $(".nav-item .nav-link").on("click", function () {
                    $(this).siblings(".megamenu").addClass("show");
                })

            }
        }

        mobileMenu();
        $(window).resize(function () {
            mobileMenu();
        });

        $(".close-megamenu").on("click", function () {
            $(this).closest(".megamenu").removeClass("show")
        })
    }
    if ($(".submenu")) {
        function mobileMenu() {
            if (window.innerWidth > 1280) {
                $(".nav-item")
                    .on("mouseenter", function () {
                        if (window.innerWidth > 1280) {
                            $(this).find(".submenu").addClass("show");
                        }
                    })
                    .on("mouseleave", function () {
                        $(this).find(".submenu").removeClass("show");
                    });
            } else {
                $(".nav-item .nav-link").on("click", function () {
                    $(this).siblings(".submenu").addClass("show");
                })

            }
        }

        mobileMenu();
        $(window).resize(function () {
            mobileMenu();
        });

        $(".close-submenu").on("click", function () {
            $(this).closest(".submenu").removeClass("show")
        })

        if ($(".submenu-nav-item-has-menu")) {
            $(".submenu-nav-item-has-menu").on("mouseenter", function () {
                $(this).find(".second-submenu").addClass("show");
            }).on("mouseleave", function () {
                $(this).find(".second-submenu").removeClass("show");
            });
            $(".close-second-submenu").on("click", function () {
                $(this).closest(".second-submenu").removeClass("show")
            })
        }
    }

    // ===================================================================

    if ($(".megamenu-tabs").length > 0) {
        function megamenuTabs() {
            $(".megamenu-tabs").each(function () {
                let $currentTab = $(this);
                $currentTab.find(".megamenu-tabs-content > .megamenu-tab-content-item:first-child").addClass("active");
                $currentTab.find(".megamenu-tabs-nav ul li").on("mouseenter", function () {
                    if ($(window).width() > 1280) {
                        let currentTabIndex = $(this).index(),
                            tabsContainer = $(this).closest(".megamenu-tabs"),
                            tabsNav = $(tabsContainer).children(".megamenu-tabs-nav").children("ul").children("li"),
                            tabsContent = $currentTab.find(".megamenu-tabs-content  .megamenu-tab-content-item");
                        $(this).parent("li").addClass("active");
                        $(tabsNav).removeClass("active");
                        $(this).addClass("active");
                        $(tabsContent).removeClass("active");
                        $(tabsContent).eq(currentTabIndex).addClass("active");
                    }
                }).on("click", function () {
                    if ($(window).width() < 1280) {
                        let th = $(this);
                        th.siblings().removeClass("active");
                        th.toggleClass("active");
                        th.find(".co-list").slideToggle(300);
                        th.siblings().find(".co-list").slideUp(300);
                    }
                });
                $(window).resize(function () {
                    if ($(window).width() > 1280) {
                        $(".co-list").slideUp(50);
                    }
                })

            })
        }
        megamenuTabs();
    }

    // To Duplicate the List 
    if ($(".megamenu-tab-item").length > 0) {
        $(".megamenu-tab-item").each(function () {
            let $th = $(this);
            let $thId = $(this).attr("id");
            let $content = $("#" + $thId + "-list").html();
            $th.append(`<div class="co-list hidden"><ul class="flex flex-col gap-y-1 gap-3">${$content}</ul></div>`);
        })
    }
    if ($(".sort-by-btn")) {
        $(".sort-by-btn").on("click", function () {
            $(".sort-by").slideToggle(250);
        })

    }

    // ===================================================================

    // Trip Slider
    if ($(".trip-slider").length > 0) {
        $(".trip-slider").each(function () {
            let slider = $(this);
            let pagination = slider.find('.trip-pagination');

            let swiper = new Swiper(slider[0], {
                loop: true,
                effect: 'fade', // Set the fade effect
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: pagination[0],
                    clickable: true
                },
                speed: 1500,
                autoplay: {
                    delay: 60,
                    disableOnInteraction: false
                }
            });
            swiper.autoplay.stop();

            // Pause autoplay on hover
            slider.on('mouseenter', function () {
                swiper.autoplay.start();
            });

            // Resume autoplay on mouse leave
            slider.on('mouseleave', function () {
                swiper.autoplay.stop();
            });
        });
    }
    // ===================================================================

    // Values Slider
    if ($(".values-slider").length > 0) {
        const sliders = document.querySelectorAll(".values-slider");
        sliders.forEach(function (slider) {
            new Swiper(slider, {
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });
        });
    }
    // ===================================================================

    // Guides Slider
    if ($(".guides-slider").length > 0) {
        const sliders = document.querySelectorAll(".guides-slider");
        sliders.forEach(function (slider) {
            new Swiper(slider, {
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
            });
        });
    }
    // ===================================================================

    // Community Slider
    if ($(".community-slider").length > 0) {
        const sliders = document.querySelectorAll(".community-slider");
        sliders.forEach(function (slider) {
            new Swiper(slider, {
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                },
            });
        });
    }
    // ===================================================================

    // Partner Slider
    if ($(".partner-slider").length > 0) {
        const sliders = document.querySelectorAll(".partner-slider");
        sliders.forEach(function (slider) {
            let pagination = slider.querySelector('.partner-pagination');
            new Swiper(slider, {
                spaceBetween: 16,
                pagination: {
                    el: pagination,
                    clickable: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 7,
                    },
                },
            });
        });
    }
    // ===================================================================

    // Testimonials Slider
    if ($(".testimonials-slider").length > 0) {
        const sliders = document.querySelectorAll(".testimonials-slider");
        sliders.forEach(function (slider) {
            new Swiper(slider, {
                spaceBetween: 30,
                slidesPerView: 1,
            });
        });
    }
    // ===================================================================

    // check in check out Home Page
    if ($("#check").length > 0) {
        // check in - check out
        const checkin = new Litepicker({
            element: document.getElementById("check"),
            format: "DD MMM",
            singleMode: false,
            minDate: new Date(),
            disallowLockDaysInRange: true,
        });
    }
    // ===================================================================

    // Hot Deal
    if ($(".hot-deal-box").length > 0) {
        $(".hot-deal-box").each(function () {
            $(this).on("mouseover", function () {
                if ($(this).find("video").length > 0) {
                    $(this).find("video").get(0).play();
                }
            });

            $(this).on("mouseleave", function () {
                if ($(this).find("video").length > 0) {
                    const video = $(this).find("video").get(0);
                    video.pause();
                    video.currentTime = 0;
                }
            });

            $(this).on("touchstart", function () {
                if ($(this).find("video").length > 0) {
                    $(this).find("video").get(0).play();
                }
            });

            $(this).on("touchend", function () {
                if ($(this).find("video").length > 0) {
                    const video = $(this).find("video").get(0);
                    video.pause();
                    video.currentTime = 0;
                }
            });
        });
    }
    // ===================================================================

    // Guides Page
    // Guides Slider
    if ($(".all-guides-slider").length > 0) {
        const slider = document.querySelectorAll(".all-guides-slider");
        slider.forEach(function (slider) {
            const pagination = slider.querySelector(".all-guides-pagination");
            let nextButton = slider.querySelector('.all-guides-next');
            let prevButton = slider.querySelector('.all-guides-prev');
            new Swiper(slider, {
                spaceBetween: 30,

                pagination: {
                    el: pagination,
                    clickable: true
                },
                navigation: {
                    nextEl: nextButton,
                    prevEl: prevButton
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        grid: {
                            rows: 1,
                            fill: "row",
                        },
                    },
                    768: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: "row",
                        },
                    },
                    1024: {
                        slidesPerView: 4,
                        grid: {
                            rows: 2,
                            fill: "row",
                        },
                    },
                },
            });
        });
    }
    // ===================================================================


    // Category Page
    // Price Slider
    // if ($(".price-slider").length > 0) {

    //     const range = document.querySelectorAll(".range-slider span input");
    //     progress = document.querySelector(".range-slider .progress");
    //     let gap = 3;
    //     const inputValue = document.querySelectorAll(".numberVal input");

    //     range.forEach((input) => {
    //         input.addEventListener("input", (e) => {
    //             let minRange = parseInt(range[0].value);
    //             let maxRange = parseInt(range[1].value);

    //             if (maxRange - minRange < gap) {
    //                 if (e.target.className === "range-min") {
    //                     range[0].value = maxRange - gap;
    //                 } else {
    //                     range[1].value = minRange + gap;
    //                 }
    //             } else {
    //                 progress.style.insetInlineStart = (minRange / range[0].max) * 100 + "%";
    //                 progress.style.insetInlineEnd = 100 - (maxRange / range[1].max) * 100 + "%";
    //                 inputValue[0].value = minRange;
    //                 inputValue[1].value = maxRange;
    //             }
    //         });
    //     });

    // }


    if ($(".price-slider").length > 0) {
        let priceSlider = document.querySelectorAll(".price-slider");
        priceSlider.forEach(slider => {
            let gap = 3,
                progress = slider.querySelector(".progress");
            const range = slider.querySelectorAll("span input"),
                minValue = slider.querySelector(".numberVal.min-value input"),
                maxValue = slider.querySelector(".numberVal.max-value input");
            range.forEach((input) => {
                input.addEventListener("input", (e) => {
                    let minRange = parseInt(range[0].value);
                    let maxRange = parseInt(range[1].value);
                    if (maxRange - minRange < gap) {
                        if (e.target.className === "range-min") {
                            range[0].value = maxRange - gap;
                        } else {
                            range[1].value = minRange + gap;
                        }
                    } else {
                        progress.style.insetInlineStart = (minRange / range[0].max) * 100 + "%";
                        progress.style.insetInlineEnd = 100 - (maxRange / range[1].max) * 100 + "%";
                        minValue.value = minRange;
                        maxValue.value = maxRange;
                    }
                });
            });
        })
    }
    // ===================================================================

    // Filter 
    if ($(".filter-box").length > 0) {
        $(".filter-btn").on("click", function () {
            $(".filter-box").addClass("show");
            $("body").css("overflow", "hidden");
        })
        $(".filter-close-btn").on("click", function () {
            $(".filter-box").removeClass("show");
            $("body").css("overflow", "visible");
        })

        $(".filter-box").on("click", function (e) {
            if (e.target.classList.contains("filter-box") || e.target.parentNode.classList.contains("filter-close-btn")) {
                $(".filter-box").removeClass("show");
                $("body").css("overflow", "visible");
            }
        })
    }
    // ===================================================================


    if ($(".sticky-trip-content").length > 0) {
        let headHeight;
        if ($(".cat-header").length > 0) {
            headHeight = $(".cat-header").height();
        }
        else {
            headHeight = 80;
        }

        $(window).on("scroll", function () {
            let pos = $(".trip-info").position().top;
            if ($(window).scrollTop() > pos) {
                $(".sticky-trip-content").addClass("show");
                $(".sticky-trip-content").css("top", headHeight)

            }
            else {
                $(".sticky-trip-content").removeClass("show");
                $(".sticky-trip-content").css("top", "0")
            }
        });

    }
    // ===================================================================


    // Single Trip Page
    // steps
    if ($(".steps-item").length > 0) {
        $(".steps-item").each(function (index) {
            let th = $(this),
                stepIcn = th.find(".steps-icon"),
                stepCntnt = th.find(".steps-content"),
                stepShowMoreBtn = th.find(".steps-show-more-btn");

            // Define the event handler for the show more button
            stepShowMoreBtn.on("click", function () {
                stepIcn.toggleClass("open");
                stepCntnt.slideToggle(300);
                stepShowMoreBtn.toggleClass("seeless");
                if (stepShowMoreBtn.hasClass("seeless")) {
                    stepShowMoreBtn.text("See less");
                } else {
                    stepShowMoreBtn.text("See details & photo");
                }
            });

            // Open the first steps-item
            if (index === 0) {
                // Trigger click event on the first steps-show-more-btn
                stepShowMoreBtn.trigger('click');
            }
        });
    }

    // Light Box Image In Single Trip  page

    if ($(".single-trip-images").length > 0) {
        const slider = document.querySelectorAll(".single-trip-images");
        slider.forEach(function (slider) {
            let nextButton = slider.querySelector('.single-trip-images-next');
            let prevButton = slider.querySelector('.single-trip-images-prev');
            new Swiper(slider, {
                spaceBetween: 30,
                slidesPerView: 1,
                loop: true,
                navigation: {
                    nextEl: nextButton,
                    prevEl: prevButton,
                },
            });
        });
    }
    // ===================================================================

    if ($(".gallery-item").length > 0) {
        const galleryItm = document.querySelectorAll(".gallery-item");
        galleryItm.forEach(function (itm) {
            itm.addEventListener("click", function () {
                if ($(".light-box-container").length > 0) {
                    $(".light-box-container").addClass("show");
                    $("body").css("overflow", "hidden")
                }
            })
        });

    }
    // ===================================================================

    if ($(".light-box-container").length > 0) {
        let lightBoxContainer = document.querySelector('.light-box-container');
        let closeButton = lightBoxContainer.querySelector('.light-box-close-btn');
        let swiperContainer = lightBoxContainer.querySelector('.swiper');

        lightBoxContainer.addEventListener('click', function (event) {
            if (event.target === lightBoxContainer && !swiperContainer.contains(event.target)) {
                lightBoxContainer.classList.remove('show');
                $("body").css("overflow", "visible")
            }
        });

        closeButton.addEventListener('click', function () {
            lightBoxContainer.classList.remove('show');
            $("body").css("overflow", "visible")
        });
    }
    // ===================================================================


    // Checkout Page
    // Month Slider
    if ($(".month-slider").length > 0) {
        $(".month-slider").each(function () {
            let slider = $(this);

            let swiper = new Swiper(slider[0], {
                spaceBetween: 8,
                breakpoints: {
                    0: {
                        slidesPerView: 6.2,
                    },
                    768: {
                        slidesPerView: 8.2,
                    },
                    1024: {
                        slidesPerView: 12,
                    },
                },
            });
        });
    }
    // ===================================================================

    if ($(".guests-num").length > 0) {
        $(".guests-num").each(function () {
            let incBtn = $(this).find(".increace-btn");
            let decBtn = $(this).find(".decreace-btn");
            let inpt = $(this).find("input");
            incBtn.click(function () {
                let currentValue = parseInt(inpt.val());
                let newValue = currentValue + 1;
                inpt.val(newValue);
            });
            decBtn.click(function () {
                let currentValue = parseInt(inpt.val());
                let newValue = Math.max(currentValue - 1, 0);
                inpt.val(newValue);
            });
        })
    }
    // ===================================================================

    if ($(".trip-date-years").length > 0) {
        let activ = $(".trip-date-year.active");
        let activeAttr = activ.attr("data-year");
        $(".trip-years-cntnt").css("display", "none")
        $(`.trip-years-cntnt[data-year=${activeAttr}]`).css("display", "block")

        $(".trip-date-year").on("click", function () {
            let th = $(this);
            let cntn = th.attr("data-year");
            th.addClass("active").siblings().removeClass("active");
            $(".trip-years-cntnt").css("display", "none")
            $(`.trip-years-cntnt[data-year=${cntn}]`).css("display", "block")
        })
    }
    // ===================================================================

    if ($(".trip-date-months").length > 0) {
        let activ = $(".trip-date-month.active");
        let activeAttr = activ.attr("data-month");
        $(".trip-months-cntnt").css("display", "none")
        $(`.trip-months-cntnt[data-month=${activeAttr}]`).css("display", "block")

        $(".trip-date-month").on("click", function () {
            let th = $(this);
            let cntn = th.attr("data-month");
            th.addClass("active").siblings().removeClass("active");
            $(".trip-months-cntnt").css("display", "none")
            $(`.trip-months-cntnt[data-month=${cntn}]`).css("display", "block")
        })
    }
    if ($(".itinary-map-btn").length > 0) {

        let itineraryMapContainer = $('.itinary-map-container');
        let itnMap = $('.itn-map');

        $(document).on('click', function (event) {
            if ($(event.target).hasClass('itinary-map-container')) {
                itineraryMapContainer.removeClass('show');
                $("body").css("overflow", "visible");
            }
        });

        itnMap.on('click', function (event) {
            event.stopPropagation();
        });


        $(".itinary-map-btn").on("click", function () {
            itineraryMapContainer.addClass("show");
            $("body").css("overflow", "hidden");

        })
        $(".close-itn-map").on("click", function () {
            itineraryMapContainer.removeClass("show");
            $("body").css("overflow", "visible");
        })
    }

    // FAQ 
    if ($(".faq-btn").length > 0) {

        let itineraryMapContainer = $('.faq-container');
        let itnMap = $('.itn-map');

        $(document).on('click', function (event) {
            if ($(event.target).hasClass('faq-container')) {
                itineraryMapContainer.removeClass('show');
                $("body").css("overflow", "visible");
            }
        });

        itnMap.on('click', function (event) {
            event.stopPropagation();
        });


        $(".faq-btn").on("click", function () {
            itineraryMapContainer.addClass("show");
            $("body").css("overflow", "hidden");

        })
        $(".close-faq").on("click", function () {
            itineraryMapContainer.removeClass("show");
            $("body").css("overflow", "visible");
        })
    }
    // ===================================================================
    // payment accordion
    if ($(".payment-item").length > 0) {
        $('.payment-item input[type="radio"]').change(function () {
            $('.payment-item .payment-content').slideUp(400);
            $(".payment-item").removeClass("border-Brand-Dark").removeClass("bg-Monte-Carlo-50").addClass("border-Neutral-200 bg-Neutral-25")
            $(this).closest(".payment-item").find(".payment-content").slideDown(400);
            $(this).closest(".payment-item").addClass("border-Brand-Dark bg-Monte-Carlo-50").removeClass("border-Neutral-200").removeClass("bg-Neutral-25")
        });
    }


    // back to top 
    if ($("#back-top").length > 0) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-top').fadeIn();
            }
            else {
                $('.back-top').fadeOut();
            }
        })
        $('.back-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 250);
            return false;
        })
    }
    // Seemore and see less for truncatesd-text
    if ($(".truncatesd-text").length > 0) {
        $(".truncatesd-text").each(function () {
            let th = $(this);
            let btn = th.siblings(".see-more-btn");

            btn.on("click", function () {
                th.toggleClass("line-clamp-2");
                if (th.hasClass("line-clamp-2")) {
                    btn.text("See more");
                } else {
                    btn.text("See less");
                }
            });
        });
    }
    // show and hide password
    if ($(".show-password-btn").length > 0) {
        $(".show-password-btn").each(function () {
            let th = $(this);
            let inpt = th.siblings("input");

            th.on("click", function () {
                let fieldType = inpt.attr('type');
                if (fieldType === 'password') {
                    inpt.attr('type', 'text');
                } else {
                    inpt.attr('type', 'password');
                }
            });
        });
    }


    if ($(".drop-down-menu").length > 0) {
        $('.drop-down-menu').on('click', function (event) {
            const target = event.target;
            const dropDownMenu = $(this);
            const triggerDropdown = dropDownMenu.find('.drop-down-list');
            const dropDownListSelected = dropDownMenu.find('span');

            if ($(target).is('li')) {
                $(target).addClass("active").siblings().removeClass("active")
                // Update the content of the span with the content of the clicked list item
                dropDownListSelected.html($(target).text().trim() + `<img src="assets/images/icons/tabler_chevron-down.svg" width="24" height="24" alt="chevrondown">`);
                // Close the dropdown after selection
                triggerDropdown.removeClass('open');
            } else {
                // Toggle the dropdown if the click is not on a list item
                triggerDropdown.toggleClass('open');
            }
        });
    }

    if ($("#location").length > 0) {
        let availableTags = [
            "Albania",
            "Austria",
            "Bosnia",
            "Bulgaria",
            "Croatia",
            "Czech Republic",
            "England",
            "Denmark",
            "Estonia",
            "Hungary",
            "Iceland",
            "Ireland",
            "Italy",
            "Latvia",
            "Lithuania",
            "Montenegro",
            "Netherlands",
            "Norway",
            "Romania",
            "Scotland",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Turkey",
            "United Kingdom",
        ];
        $("#location").autocomplete({
            source: availableTags,
            position: { my: "left top+16", at: "left bottom" },
            open: function (event, ui) {
                $(this).autocomplete("widget").css({
                    "width": $(this).outerWidth(),
                    "max-height": "500px",
                    "overflow-y": "auto"
                });
            }
        });
    }
    if ($(".about-video-container").length > 0) {
        // Add click event to play button
        $('.about-play-video').on('click', function () {
            $('.about-video-container').addClass('show');
            $('.about-video-container video').get(0).currentTime = 0;
        });

        // Add click event to video container
        $('.about-video-container').on('click', function (event) {
            // Check if clicked element is the video
            if (!$(event.target).closest('video').length) {
                $('.about-video-container').removeClass('show');
                $('.about-video-container video').get(0).pause();
            }
        });
    }


    if ($(".guide-tab").length > 0) {
        $(".guide-tab").on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");


            let selectedGuide = $(this).data('guide');
            if (selectedGuide === "all") {
                $('.all-guides .our-team-item').show();
            }
            else {
                // Hide all items first
                $('.all-guides .our-team-item').hide();

                // Show only the items matching the selected guide
                $('.all-guides .our-team-item[data-guide="' + selectedGuide + '"]').show();
            }
        })
    }
})


