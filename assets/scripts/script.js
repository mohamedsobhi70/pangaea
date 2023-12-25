$(window).on("load", function () {
    // Slider Component
    if ($(".designpeer-slider-wrapper").length > 0) {
        $(".designpeer-slider-wrapper").each(function () {
            let $this = $(this),
                $thisID = $this.attr("id"),
                $data_space_desktop = ($this.data("space-desktop") !== undefined) ? $this.data("space-desktop") : 0,
                $data_space_tablet = ($this.data("space-tablet") !== undefined) ? $this.data("space-tablet") : 0,
                $data_space_mobile = ($this.data("space-mobile") !== undefined) ? $this.data("space-mobile") : 0,
                $items_desktop = ($this.data("items-desktop") !== undefined) ? $this.data("items-desktop") : 1,
                $items_tablet = ($this.data("items-tablet") !== undefined) ? $this.data("items-tablet") : 1,
                $items_mobile = ($this.data("items-mobile") !== undefined) ? $this.data("items-mobile") : 1,
                $auto_speed = ($this.data("autoplay-speed") !== undefined) ? $this.data("autoplay-speed") : 500000,
                $loop = ($this.data("loop") !== undefined) ? true : false,
                $free = ($this.data("freemode") !== undefined) ? true : false,
                $center = ($this.data("centered") !== undefined) ? true : false;
            let swiper = new Swiper("#" + $thisID, {
                loop: $loop,
                centeredSlides: $center,
                freeMode: $free,
                autoplay: {
                    delay: $auto_speed,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: `#${$thisID} .designpeer-slide-next`,
                    prevEl: `#${$thisID} .designpeer-slide-prev`,
                },
                pagination: {
                    el: `#${$thisID} .designpeer-slide-pagination`,
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: $items_mobile,
                        spaceBetween: $data_space_mobile
                    },
                    757: {
                        slidesPerView: $items_tablet,
                        spaceBetween: $data_space_tablet
                    },
                    1024: {
                        slidesPerView: $items_desktop,
                        spaceBetween: $data_space_desktop
                    }
                }
            });
        })
    }

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




    // check in - check out 
    const checkin = new Litepicker({
        element: document.getElementById('check'),
        format: "DD MMM",
        singleMode: false,
        minDate: new Date(),
        disallowLockDaysInRange: true,
    });
    
});
