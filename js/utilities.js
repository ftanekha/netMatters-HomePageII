function hamburgerToCross(){
    $hamburgerMenuIcon.css({
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
function crossToHamburger(){
    // reset css properties
    $hamburgerMenuIcon.css({
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
function slideInSideMenu(sideMenu){
    hamburgerToCross()
    sideMenu
        .css('visibility','visible')
        .addClass('toggle-side-menu-in')
        //force side menu to remain on-screen
        .css('right', '0px')
    // resive page main content container with accordingly
    $('div#container').addClass('reduced-width')
    // $('div').on('click', ()=> slideOutSideMenu(sideMenu))
}
function slideOutSideMenu(sideMenu){
    crossToHamburger()
    sideMenu
        .removeClass('toggle-side-menu-in')
        .addClass('toggle-side-menu-out')
        .css({//force side menu to remain off-screen
            visibility:'hidden', 
            right: '-350px'
        })

    // resive page main content container with accordingly
    $('div#container').removeClass('reduced-width')
}