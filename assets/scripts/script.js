$(window).on("load", function () {

    if ($(".mobile-menu-btn")) {
        $(".mobile-menu-btn").on("click", function () {
            $(".mobile-menu").addClass("show")
        })
        $(".mobile-menu-close").on("click", function () {
            $(".mobile-menu").removeClass("show")
        })
    }
    if ($(".megamenu")) {
        $(".nav-item").on("mouseenter", function () {
            $(this).find(".megamenu").addClass("show")
        }).on("mouseleave", function () {
            $(this).find(".megamenu").removeClass("show")
        })
    }
    // ===================================================================

    // Tabs Component 
    if ($(".designpeer-tabs").length > 0) {
        $(".designpeer-tabs").each(function () {
            let $currentTab = $(this),
                $currentTabId = "#" + $currentTab.attr("id").toString();
            $currentTab.find(".designpeer-tabs-content > div:first-child").addClass("active");

            $($currentTabId + " .designpeer-tabs-nav ul li").on("mouseenter",function () {
                var currentTabIndex = $(this).index(),
                    tabsContainer = $(this).closest(".designpeer-tabs"),
                    tabsNav = $(tabsContainer).children(".designpeer-tabs-nav").children("ul").children("li"),
                    tabsContent = $currentTab.find(".designpeer-tabs-content > div ");
                $(this).parent("li").addClass("active");
                $(tabsNav).removeClass("active");
                $(this).addClass("active");

                $(tabsContent).removeClass("active");
                $(tabsContent).eq(currentTabIndex).addClass("active");
            });
        });
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
                        $designpeerAccordion.find(".designpeer-accordion-item").removeClass("active");
                        $this.parent().addClass("active");
                        $this.parent().parent().find(".designpeer-tab-title").removeClass("show active");
                        $this.parent().parent().find(".designpeer-tab-content").slideUp($accordionSpeed);
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
    if ($('.trip-owl').length > 0) {

        $('.trip-owl').each(function () {

            const carousel = $(this);
            carousel.owlCarousel({
                rtl: true,
                items: 1,
                dots: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
            });

            const nextBtn = carousel.siblings('.nxtBtn');
            const prevBtn = carousel.siblings('.prevBtn');

            nextBtn.click(function () {
                carousel.trigger('next.owl.carousel');
            });

            prevBtn.click(function () {
                carousel.trigger('prev.owl.carousel');
            });
        });
    }



    // Partner Slider 
    if ($('.partners-owl').length > 0) {

        $('.partners-owl').owlCarousel({
            rtl: true,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            margin: 16,
            responsive: {
                0: {
                    stagePadding: 20,
                    items: 3,
                },
                768: {
                    stagePadding: 20,
                    items: 5,
                },
                1024: {
                    stagePadding: 0,
                    items: 6,
                }

            }
        })
    }

    // Testimonials Slider 
    if ($('.testimonials-owl').length > 0) {

        $('.testimonials-owl').owlCarousel({
            rtl: true,
            nav: false,
            dots: false,
            loop: true,
            items: 1,
            margin: 32,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    stagePadding: 20,
                },
                768: {
                    stagePadding: 20,
                },
                1024: {
                    stagePadding: 0,
                }

            }
        })
    }

    // Our Values Slider 
    if ($('.values-owl').length > 0) {

        $('.values-owl').owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1.1,
                    margin: 20,
                    stagePadding: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                    stagePadding: 20,
                },
                1024: {
                    items: 3,
                    margin: 30,
                    stagePadding: 0,
                }

            }
        })
    }

    // Latest Guides Slider 
    if ($('.guides-owl').length > 0) {

        $('.guides-owl').owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1.1,
                    margin: 20,
                    stagePadding: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                    stagePadding: 20,
                },
                1024: {
                    items: 4,
                    margin: 30,
                    stagePadding: 0,
                }

            }
        })
    }

    // Community Slider 
    if ($('.community-owl').length > 0) {

        $('.community-owl').owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1.1,
                    margin: 20,
                    stagePadding: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                    stagePadding: 20,
                },
                1024: {
                    items: 2,
                    margin: 30,
                    stagePadding: 0,
                }

            }
        })
    }

    // check in check out Home Page
    if ($('#check').length > 0) {

        // check in - check out 
        const checkin = new Litepicker({
            element: document.getElementById('check'),
            format: "DD MMM",
            singleMode: false,
            minDate: new Date(),
            disallowLockDaysInRange: true,
        });
    }

    // Hot Deal 
    if ($('.hot-deal-box').length > 0) {
        $('.hot-deal-box').each(function () {
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

});
