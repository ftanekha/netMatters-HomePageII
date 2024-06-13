function hamburgerToCross(){
    $hamburgerMenuIcon.css({
        position: 'relative',
        paadingTop: '15px'
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
    $hamburgerMenuIcon.css({
        // position: 'relative',
        padingTop: '10px'
    })
    $('.hamburger-box.left').css('rotate', '0deg')
    $('.hamburger-box.middle').show()
    $('.hamburger-box.right').css({
        rotate: '0deg',
        // position: 'relative',
        bottom: '0'
    })
}

export {hamburgerToCross, crossToHamburger}

