$(window).on("load", function () {

    if ($(".mobile-menu-btn")) {
        $(".mobile-menu-btn").on("click", function () {
            $(".mobile-menu").addClass("show");
        });
        $(".mobile-menu-close").on("click", function () {
            $(".mobile-menu").removeClass("show");
        });
    }

    function mobileMenu() {
        if ($(".megamenu")) {
            if ($(window).width() > 1024) {
                $(".nav-item")
                    .on("mouseenter", function () {
                        $(this).find(".megamenu").addClass("show");
                    })
                    .on("mouseleave", function () {
                        $(this).find(".megamenu").removeClass("show");
                    });
            } else {
                $(".nav-item .nav-link").on("click", function () {
                    $(this).siblings(".megamenu").addClass("show");
                });

            }

        }
    }

    mobileMenu();
    $(window).resize(function () {
        mobileMenu();
    });
    $(".close-megamenu").on("click", function () {
        $(this).closest(".megamenu").removeClass("show")
    })
    // ===================================================================

    // Tabs Component
    // if ($(".designpeer-tabs").length > 0) {
    //     $(".designpeer-tabs").each(function () {
    //         let $currentTab = $(this),
    //             $currentTabId = "#" + $currentTab.attr("id").toString();
    //         $currentTab.find(".designpeer-tabs-content > div:first-child").addClass("active");

    //         $($currentTabId + " .designpeer-tabs-nav ul li").on("mouseenter", function () {
    //             var currentTabIndex = $(this).index(),
    //                 tabsContainer = $(this).closest(".designpeer-tabs"),
    //                 tabsNav = $(tabsContainer).children(".designpeer-tabs-nav").children("ul").children("li"),
    //                 tabsContent = $currentTab.find(".designpeer-tabs-content > div ");
    //             $(this).parent("li").addClass("active");
    //             $(tabsNav).removeClass("active");
    //             $(this).addClass("active");

    //             $(tabsContent).removeClass("active");
    //             $(tabsContent).eq(currentTabIndex).addClass("active");
    //         });
    //     });
    // }

    if ($(".megamenu-tabs").length > 0) {
        function megamenuTabs() {
            $(".megamenu-tabs").each(function () {
                let $currentTab = $(this);
                $currentTab.find(".megamenu-tabs-content > .megamenu-tab-content-item:first-child").addClass("active");
                $currentTab.find(".megamenu-tabs-nav ul li").on("mouseenter", function () {
                    if ($(window).width() > 1024) {
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
                    if ($(window).width() < 1024) {
                        let th = $(this);
                        th.siblings().removeClass("active");
                        th.toggleClass("active");
                        th.find(".co-list").slideToggle(300);
                        th.siblings().find(".co-list").slideUp(300);
                    }
                });
                $(window).resize(function () {
                    if ($(window).width() > 1024) {
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

    // ===================================================================

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


    // Trip Slider
    if ($(".trip-slider").length > 0) {
        const sliders = document.querySelectorAll(".trip-slider");
        sliders.forEach(function (slider) {
            let pagination = slider.querySelector('.trip-pagination');
            let nextButton = slider.querySelector('.trip-next');
            let prevButton = slider.querySelector('.trip-prev');

            new Swiper(slider, {
                loop: true,
                pagination: {
                    el: pagination,
                    clickable: true
                },
                navigation: {
                    nextEl: nextButton,
                    prevEl: prevButton
                },
            });
        });
    }

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

    // Testimonials Slider
    if ($(".testimonials-slider").length > 0) {
        const sliders = document.querySelectorAll(".testimonials-slider");
        sliders.forEach(function (slider) {
            new Swiper(slider, {
                slidesPerView: 1,
            });
        });
    }

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

    if ($(".owl-carousel").length > 0) {
        $(".prevBtn").each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
        })
        $(".nxtBtn").each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
        })
        $('.owl-carousel').each(function () {
            //Find each set of dots in this carousel
            $(this).find('.owl-dot').each(function (index) {
                //Add one to index so it starts from 1
                $(this).attr('aria-label', index + 1);
            });
        });
    }


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


});
