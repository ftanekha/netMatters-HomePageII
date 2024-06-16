import {showSideMenu, hideSideMenu, toggleStickyHeader, displayCookieModal} from './utilities.js'

$(document).ready(()=>{
    /*COOKIE POPUP POLICY & consent management*/
    displayCookieModal()
    const cookiSettingsButton = $('.cookie-settings-btn')
    cookiSettingsButton.on('click', ()=> displayCookieModal(true))
    /*CAROUSEL/////////////////
    container for carousel*/
    $('div#banner').slick(
        {//configuration object
            autoplay: true,
            arrows: false,
            dots: true
        }
    )
    $('.slick-dots li button').css('cursor', 'pointer')
    /* SIDE MENU////////////////////
    toggle the Side Menu using the hamburger menu button*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    
    $hamburgerMenuIcon.on('click', ()=>{
        const $sideMenu = $('div#side-menu')
        if($sideMenu.css('display') === 'none'){
            showSideMenu($hamburgerMenuIcon, $sideMenu)
        }else{
            hideSideMenu($hamburgerMenuIcon, $sideMenu)
        }  
    })
    /* STICKY HEADER*/
    //determine the scroll direction using the scroll position on the document object
    //only show the sticky header wher the user scrolls UP
    toggleStickyHeader()
})
