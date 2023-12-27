$(window).on("load", function () {

    // ===================================================================

    // Tabs Component 
    if ($(".designpeer-tabs").length > 0) {
        $(".designpeer-tabs").each(function () {
            let $currentTab = $(this),
                $currentTabId = "#" + $currentTab.attr("id").toString();

            $($currentTabId + " .designpeer-tabs-nav ul li").click(function () {
                var currentTabIndex = $(this).index(),
                    tabsContainer = $(this).closest(".designpeer-tabs"),
                    tabsNav = $(tabsContainer).children(".designpeer-tabs-nav").children("ul").children("li"),
                    tabsContent = $(tabsContainer).children(".designpeer-tabs-content").children("div");

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

            console.log(nextBtn);
            console.log(prevBtn);
            nextBtn.click(function () {
                carousel.trigger('next.owl.carousel');
            });

            prevBtn.click(function () {
                carousel.trigger('prev.owl.carousel');
            });
        });
    }



    // Partner Slider 
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
                items: 2,
            },
            768: {
                stagePadding: 20,
                items: 4,
            },
            1024: {
                stagePadding: 0,
                items: 6,
            }

        }
    })

    // Testimonials Slider 
    $('.testimonials-owl').owlCarousel({
        rtl: true,
        nav: false,
        dots: false,
        loop: true,
        items: 1,
        margin: 16,
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

    // check in - check out 
    const checkin = new Litepicker({
        element: document.getElementById('check'),
        format: "DD MMM",
        singleMode: false,
        minDate: new Date(),
        disallowLockDaysInRange: true,
    });

});
