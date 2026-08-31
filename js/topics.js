/* =====================================================
   TECHSPARK 2026
   TOPICS PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       TOPIC FILTERS
    ================================================= */

    const topicFilters =
        document.querySelectorAll(".topic-filter");

    const topicPanels =
        document.querySelectorAll(".topic-panel");


    topicFilters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            const selectedEvent =
                filter.getAttribute("data-event");


            /* -----------------------------------------
               REMOVE ACTIVE STATE FROM ALL BUTTONS
            ----------------------------------------- */

            topicFilters.forEach(function (button) {

                button.classList.remove("active");

                button.setAttribute(
                    "aria-selected",
                    "false"
                );

            });


            /* -----------------------------------------
               ACTIVATE CLICKED BUTTON
            ----------------------------------------- */

            filter.classList.add("active");

            filter.setAttribute(
                "aria-selected",
                "true"
            );


            /* -----------------------------------------
               HIDE ALL PANELS
            ----------------------------------------- */

            topicPanels.forEach(function (panel) {

                panel.classList.remove("active");

            });


            /* -----------------------------------------
               SHOW SELECTED PANEL
            ----------------------------------------- */

            const selectedPanel =
                document.querySelector(
                    '.topic-panel[data-panel="' +
                    selectedEvent +
                    '"]'
                );


            if (selectedPanel) {

                selectedPanel.classList.add("active");

            }

        });

    });



    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenuToggle =
        document.getElementById(
            "mobileMenuToggle"
        );

    const topicsNav =
        document.querySelector(
            ".topics-nav"
        );


    if (
        mobileMenuToggle &&
        topicsNav
    ) {

        mobileMenuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    topicsNav.classList.toggle(
                        "open"
                    );


                mobileMenuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                const icon =
                    mobileMenuToggle.querySelector(
                        "i"
                    );


                if (icon) {

                    if (isOpen) {

                        icon.classList.remove(
                            "fa-bars"
                        );

                        icon.classList.add(
                            "fa-xmark"
                        );

                    } else {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );


        /* -----------------------------------------
           CLOSE MOBILE MENU AFTER LINK CLICK
        ----------------------------------------- */

        const navLinks =
            topicsNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    topicsNav.classList.remove(
                        "open"
                    );

                    mobileMenuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    const icon =
                        mobileMenuToggle.querySelector(
                            "i"
                        );


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }
            );

        });

    }



    /* =================================================
       THEME TOGGLE
    ================================================= */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    if (themeToggle) {

        const savedTheme =
            localStorage.getItem(
                "techspark-theme"
            );


        /* -----------------------------------------
           APPLY SAVED THEME
        ----------------------------------------- */

        if (savedTheme === "light") {

            document.body.classList.add(
                "light-theme"
            );

        }


        updateThemeIcon();


        /* -----------------------------------------
           TOGGLE THEME
        ----------------------------------------- */

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "light-theme"
                );


                const isLight =
                    document.body.classList.contains(
                        "light-theme"
                    );


                localStorage.setItem(
                    "techspark-theme",
                    isLight
                        ? "light"
                        : "dark"
                );


                updateThemeIcon();

            }
        );

    }


    /* =================================================
       UPDATE THEME ICON
    ================================================= */

    function updateThemeIcon() {

        if (!themeToggle) {
            return;
        }


        const icon =
            themeToggle.querySelector("i");


        if (!icon) {
            return;
        }


        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        if (isLight) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );

        }

    }



    /* =================================================
       KEYBOARD ACCESSIBILITY
    ================================================= */

    topicFilters.forEach(function (filter) {

        filter.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    filter.click();

                }

            }
        );

    });



    /* =================================================
       DEFAULT TOPIC
    ================================================= */

    const defaultFilter =
        document.querySelector(
            '.topic-filter[data-event="quiz"]'
        );


    const defaultPanel =
        document.querySelector(
            '.topic-panel[data-panel="quiz"]'
        );


    if (defaultFilter && defaultPanel) {

        defaultFilter.classList.add(
            "active"
        );

        defaultFilter.setAttribute(
            "aria-selected",
            "true"
        );

        defaultPanel.classList.add(
            "active"
        );

    }

});