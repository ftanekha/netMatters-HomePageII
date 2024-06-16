//transform hamburger menu icon to cross 
function hamburgerToCross(hamburgerMenuIcon){
    hamburgerMenuIcon.css({
        position: 'relative',
        paddingTop: '15px'
    })
    $('.hamburger-box.left').css('rotate', '45deg')
    $('.hamburger-box.middle').hide()
    $('.hamburger-box.right').css({
        rotate: '-45deg',
        position: 'relative',
        bottom: '9px'
    })
}
function crossToHamburger(hamburgerMenuIcon){
    //reset css properties
    hamburgerMenuIcon.css({
        paddingTop: '5px'
    })
    $('.hamburger-box.left').css('rotate', '0deg')
    $('.hamburger-box.middle').show()
    $('.hamburger-box.right').css({
        rotate: '0deg',
        // position: 'relative',
        bottom: '0'
    })
}
function showSideMenu(hamburgerMenuIcon, sideMenu){
    hamburgerToCross(hamburgerMenuIcon)
    // resize page main container with accordingly
    $('div#container')
    .addClass('reduced-width')
    .css('filter', 'grayscale(40%)')
    sideMenu
        .show()
        .addClass('toggle-side-menu-in')
        .css('right', '0')
}
function hideSideMenu(hamburgerMenuIcon, sideMenu){
    crossToHamburger(hamburgerMenuIcon)
    $('div#container').removeClass('reduced-width')
    .css('filter', 'grayscale(0%)')
    sideMenu
        .removeClass('toggle-side-menu-in')
        .addClass('toggle-side-menu-out')
        .hide(0)
}
function toggleStickyHeader(){
    let prevScrollTop = $(document).scrollTop()
    let prevScrollDirection = ''
    
    $(document).on('scroll', ()=>{
        const currentScrollTop = $(document).scrollTop()
        if(currentScrollTop > prevScrollTop) {
            //update scroll direction
            if(prevScrollDirection !== 'down') prevScrollDirection = 'down'
            //remove the sticky header if user scrolling down
            $('div#header-wrapper').unstick()
        }else if(currentScrollTop  < prevScrollTop){
            if(prevScrollDirection !== 'up') prevScrollDirection = 'up'
            //add the sticky header if user scrolling down
            $('div#header-wrapper').sticky({topSpacing: 0})         
        }
        //update scroll ositon
        //also, for Mobile or negative scrolling
        prevScrollTop = currentScrollTop  <= 0 ? 0 : currentScrollTop
    })
}
// display cookie modal
function displayCookieModal(){
    const hasCookieBeenDisplayed = localStorage.getItem('hasCookieBeenDisplayed')
    if(hasCookieBeenDisplayed){
        //if cookie policy has already been display, keep it hidden
        $('#cookie-policy-popup-container').css('display', 'none')
    }else{
        $('#cookie-policy-popup-container').css({
            visibility: 'visible', //show cookie modal
            backgroundColor : 'rgba(0, 0, 0, .7)'//darken background
        })
        $('.cookie-policy-button').on('click', ()=>{
            //update local storage
            localStorage.setItem('hasCookieBeenDisplayed', true)
            //hide cookie policy
            $('#cookie-policy-popup-container').fadeOut(100)
        })
    }
}
export {showSideMenu, hideSideMenu, toggleStickyHeader, displayCookieModal}