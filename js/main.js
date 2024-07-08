import {showNavigationDropDown, showSideMenu, hideSideMenu, toggleStickyHeader, toggleClientTooltip, displayCookieModal} from './utilities.js'

$(document).ready(()=>{
    /*COOKIE POPUP POLICY & consent management*/
    displayCookieModal()
    const cookiSettingsButton = $('.cookie-settings-btn')
    cookiSettingsButton.on('click', ()=> displayCookieModal(true))
    /*NAVIGATION DROP-DOWN MENU*/
    showNavigationDropDown()
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
    
    $hamburgerMenuIcon.on('click', ()=>{
        const $sideMenu = $('div#side-menu')
        if($sideMenu.css('display') === 'none'){
            showSideMenu($hamburgerMenuIcon, $sideMenu)
        }else{
            hideSideMenu($hamburgerMenuIcon, $sideMenu)
            $sideMenu.css('display','none')
        }  
    })
    /* STICKY HEADER*/
    //determine the scroll direction using the scroll position on the document object
    //only show the sticky header wher the user scrolls UP
    toggleStickyHeader()

    const carouselSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        // infinite: true,
        slidesToShow: 6
    }
    /*CAROUSEL///Acccreditations///*/
    $('div.accreditations-container').slick(carouselSettings)
    /*CAROUSEL///Clients & Partners///*/
    $('div.our-clients-carousel').slick(carouselSettings)
    toggleClientTooltip()
})