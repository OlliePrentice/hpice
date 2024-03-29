function Menu() {
    const $masthead = $(".masthead"),
        $burger = $(".burger"),
        $mobileNav = $(".mobile-navigation"),
        $closeModal = $('.close-modal'),
        $searchTrigger = $('.search-trigger');

    let animating = false;

    $('a[href="#"]').on('click', (e) => {
        e.preventDefault();
    });

    $burger.on("click", (e) => {
        e.stopPropagation();

        const $this = $(e.currentTarget);

        $this.toggleClass("active");

        if ($this.hasClass("active")) {
            $mobileNav.addClass("active");
        } else {
            $mobileNav.removeClass('active');
            $mobileNav.removeClass('sub-open');
            $masthead.removeClass("active");
            $mobileNav.find('ul').removeClass('current active');
        }
    });

    $('body').not('.burger').on('click', () => {
        $burger.removeClass('active');
        $mobileNav.removeClass('active');
        $mobileNav.removeClass('sub-open');
        $masthead.removeClass("active");
        $mobileNav.find('ul').removeClass('current active');
    });

    $mobileNav.on('click', (e) => {
        e.stopPropagation();
    });

    $mobileNav.find('.menu-item-has-children').on('click', (e) => {
        e.stopPropagation();
        $mobileNav.addClass('sub-open');
        $mobileNav.scrollTop(0);
        $mobileNav.find('ul').scrollTop(0);
        $mobileNav.find('ul').removeClass('current');
        $(e.currentTarget).children('ul').addClass('active current');
    });


    // $mobileNav.find('.menu-item-has-children > ul').prepend('<li class="menu-back"><a href="#">Back</a></li>');

    // $mobileNav.find('.menu-back').on('click', (e) => {
    //     e.stopPropagation();

    //     const $this = $(e.currentTarget);

    //     if($this.parent().parent().parent().hasClass('menu')) {
    //         $mobileNav.removeClass('sub-open');
    //         $mobileNav.find('ul').removeClass('current');
    //         $this.parent().removeClass('active');
    //     } else {
    //         $this.parent().parent().parent().addClass('current');
    //         $this.parent().removeClass('active current');
    //     }
    // });

    // $closeModal.on('click', (e) => {
    //     e.preventDefault();

    //     //Elements to Close
    // });

    // $searchTrigger.on('click', (e) => {
    //     e.preventDefault();

    //     //Search Modal
    // });


    function menuItemStates($this, type) {

        if(type === 'leave') {
            $this.removeClass('active');
            $this.find('li').removeClass('active');
        } else {
            if (!$this.closest('li').hasClass('active')) {
                //$this.closest('li').addClass('active');
                $('.menu-item-has-children').removeClass('active');
                $this.parents('li').addClass('active');
                $this.addClass('active');
            } else {
                if (type === 'click') {
                    $this.removeClass('active');
                    $this.find('li').removeClass('active');
                }
            }
        }

        if($('.masthead .menu-item-has-children.active').length) {
            $masthead.addClass('active-hovered');
        } else {
            $masthead.removeClass('active-hovered');
        }
    }


    $masthead.find('.menu-item-has-children').on('mouseenter', (e) => {
        //const $this = $(e.currentTarget)
        menuItemStates($(e.currentTarget), 'enter');
    });

    $masthead.find('.menu-item-has-children').on('mouseleave', (e) => {
        menuItemStates($(e.currentTarget), 'leave');
    });

    // const updateScroll = () => {
    //     if (updateScroll._tick) {
    //         cancelAnimationFrame(updateScroll._tick);
    //     }
    //
    //     updateScroll._tick = requestAnimationFrame(function () {
    //         updateScroll._tick = null;
    //
    //     });
    // };
    //
    // window.addEventListener('scroll', updateScroll);
    // updateScroll();

}

export default Menu;
