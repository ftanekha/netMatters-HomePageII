import {showSideMenu, hideSideMenu, toggleStickyHeader} from './utilities.js'

$(document).ready(()=>{
    /*CAROUSEL/////////////////
    container for carousel*/
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
        }  
    })
    /* STICKY HEADER*/
    //determine the scroll direction using the scroll position on the document object
    //only show the sticky header wher the user scrolls UP
    toggleStickyHeader()
})