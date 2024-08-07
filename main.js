import {
    hideSideMenu, showSideMenu, toggleStickyHeader, 
    changeRebeccaTextContent, toggleClientTooltip, displayCookieModal
} from './js/utilities.js'

$(()=>{
    while($(document).scrollTop() > 500) console.log('yep')
    /*COOKIE POPUP POLICY & consent management*/
    displayCookieModal()
    const cookiSettingsButton = $('.cookie-settings-btn')
    cookiSettingsButton.on('click', ()=> displayCookieModal(true))
    /*CAROUSEL///Banner///*/
    $('div#banner').slick(
        {//configuration object
            autoplay: true,
            arrows: false,
            dots: true
        }
    )
    /* SIDE MENU////////////////////
    toggle the Side Menu using the hamburger menu button*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    
    $hamburgerMenuIcon
    .on('click', ()=>{
        const $sideMenuContainer = $('div#side-menu-container')
        if($sideMenuContainer.css('display') === 'none'){
            showSideMenu($hamburgerMenuIcon, $sideMenuContainer)
        }else{
            hideSideMenu($hamburgerMenuIcon, $sideMenuContainer)
            $sideMenuContainercss('display','none')
        }  
    })
    .on('mouseover',
        ()=> {
            $hamburgerMenuIcon.css(
                {
                    'background-color': '#22242e',
                    'border-color': '#191a22'
                }
            )
        }
    )
    .on('mouseleave', ()=> $hamburgerMenuIcon.css('background-color', '#333645'))
    /* STICKY HEADER*/
    //determine the scroll direction using the scroll position on the document object
    //only show the sticky header wher the user scrolls UP
    toggleStickyHeader();
    /* NAV drop-down menu*/
    // ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc'].forEach(
    //     classSuffix => {
    //         $(`.${classSuffix}`)
    //         .on('mouseover', 
    //             ()=> $(`.${classSuffix}`).css('color', 'white')
    //         )
    //     }
    // )
    /*CAROUSEL///Acccreditations///*/
    const accreditationsCarouselSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        slidesToShow: 6
    }
    $('div.accreditations-container').slick(accreditationsCarouselSettings)
    /*CAROUSEL///Clients & Partners///*/
    $('.owl-carousel')
    .owlCarousel({
        items: 6,
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        mouseDrag: false,
        responsive:{
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            650: {
                items: 3
            },
            992: {
                items: 4
            },
            1220: {
                items: 5
            },
            1340:{
                items: 6
            }
        }
    })
    ///
    toggleClientTooltip()
    /*LATEST NEWS*/ 
    changeRebeccaTextContent()
})