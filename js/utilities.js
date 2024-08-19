function hamburgerToCross(){
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    $hamburgerMenuIcon.css(
        {
            position: 'relative', paddingTop: '15px'
        }
    )

    $('.hamburger-box.left').css('rotate', '45deg')
    $('.hamburger-box.middle').hide()
    $('.hamburger-box.right').css(
        {
            rotate: '-45deg', position: 'relative', bottom: '9px'
        }
    )
}
/////////////////////////////////////////////////////////////////////
function crossToHamburger(){
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    //reset css properties
    $hamburgerMenuIcon.css(
        {
            paddingTop: '5px', 'background-color': '#333645'
        }
    )

    $('.hamburger-box.left').css('rotate', '0deg')
    $('.hamburger-box.middle').show()
    $('.hamburger-box.right').css(
        {
            rotate: '0deg', bottom: '0'
        }
    )
}
/////////////////////////////////////////////////////////////////////
function getSideMenuWidth(){
    //device screen width greater than 992px?
    if(window.matchMedia('(width < 992px)').matches) {
        return '-275px'
    }else {
        return '-350px'
    }
}
/////////////////////////////////////////////////////////////////////
function toggleSideMenu(){
    const $mainOuterContainer = $('div#main-outer-container')
    const $sideMenuBackgroundFilter = $('#side-menu_background-filter')

    const sideMenuContainerZindex = 0
    const mainOuterContainerZindex = 10
    const stickyHeaderWrapperZindex = 50

    let pos = getSideMenuWidth()

    if($mainOuterContainer.hasClass('slide-origin')){
        hamburgerToCross()

        $mainOuterContainer
        .delay(1000)
        .removeClass('slide-origin').addClass(' slide-left')
        .css({
            left: pos,
            'z-index': 0
        })

        $sideMenuBackgroundFilter.css('z-index', stickyHeaderWrapperZindex)
        $(window).css('height', '100vh')
    }else{
        crossToHamburger()

        $mainOuterContainer
        .removeClass('slide-left').addClass(' slide-origin')
        .css({
            left: 0,
            'z-index': mainOuterContainerZindex
        })

        $sideMenuBackgroundFilter.css('z-index', sideMenuContainerZindex)
        //CHANGED - 1LINE
        $(window).css('height', 'auto')
        //END 
    }
}
///////////////////////////////////////////////////////////////////
function toggleStickyHeader(){
    const $headerWrapper = $('#header-wrapper-sticky-wrapper')
    const $headerWrapperSupport = $('#header-wrapper-sticky-wrapper-support')
    
    let prevScrollTop = $(document).scrollTop()
    let prevScrollDirection = ''
    
    $(document).on('scroll', ()=>{
        const currentScrollTop = $(document).scrollTop()
        if(currentScrollTop > prevScrollTop) {
            //update scroll direction
            if(prevScrollDirection !== 'down') prevScrollDirection = 'down'
            //remove the sticky header if user scrolling down
            $headerWrapperSupport.css('position', 'absolute')
            $headerWrapper
            .removeClass('slide-down')
            .addClass(' slide-up')
            .css({
                width: '100%',
                position: 'relative',
                top: 0
            })
        }else if(currentScrollTop  < prevScrollTop){
            if(prevScrollDirection !== 'up') prevScrollDirection = 'up'
            //add the sticky header if user scrolling down
            if(currentScrollTop > 210){
                $headerWrapper
                .removeClass('slide-up')
                .addClass(' slide-down')
                .css({
                    width: '100%',
                    position: 'fixed',
                    top: 0
                })
                $headerWrapperSupport.css('position', 'relative')
            }
        }
        //update scroll positon
        //also, for Mobile or negative scrolling
        prevScrollTop = currentScrollTop  <= 0 ? 0 : currentScrollTop
    })
}
//////////////////////////////////////////////////////////////////////////////////
function displayCookieModal(didUserClickManageConsentButton = false){
    const hasCookieBeenDisplayed = localStorage.getItem('hasCookieBeenDisplayed')
    if(hasCookieBeenDisplayed && !didUserClickManageConsentButton){
        //if cookie policy has already been displayed, keep it hidden
        $('#cookie-policy-popup-container').css('display', 'none')
    }else if(!hasCookieBeenDisplayed || didUserClickManageConsentButton){
        //prepare cookie modal
        $('#cookie-policy-popup-container').css(
            {
                display: 'flex',
                visibility: 'visible', //show cookie modal
                backgroundColor : 'rgba(0, 0, 0, .7)'
            }
        )
        $('.cookie-policy-button').on('click', ()=>{
            //update local storage
            localStorage.setItem('hasCookieBeenDisplayed', true)
            //reset modal css
            $('#cookie-policy-popup-container').css(
                {
                    visibility: 'hidden', backgroundColor : 'transparent'
                }
            )
            //hide cookie policy
            $('#cookie-policy-popup-container').fadeOut(100)
        })
    }
}
///////////////////////////////////////////////////////////////////////////
export { toggleSideMenu, toggleStickyHeader, displayCookieModal }