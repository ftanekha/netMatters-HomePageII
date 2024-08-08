
function togglePageSize(bodyOverflow){
    if(bodyOverflow === 'hidden'){
        $('body').css(
            {
                'max-height': '100vh', 
                'overflow-y': 'scroll'
            }
        )
        $('div#side-menu').css('top', document.documentElement.scrollTop)
    }else{
        //reset body to normal width & height
        $('body').css(
            {
                // 'min-height': '100vh', 
                height: 'auto', 
                width: '100%',
                'overflow-y': 'scroll'
            }
        )
    }
}
///////////////////////////////////////////////////////////////////
//transform hamburger menu icon to cross 
function hamburgerToCross(hamburgerMenuIcon){
    hamburgerMenuIcon.css(
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
    togglePageSize('hidden')
}
/////////////////////////////////////////////////////////////////////
function crossToHamburger(hamburgerMenuIcon){
    //reset css properties
    hamburgerMenuIcon.css(
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
    togglePageSize('scroll')
}
/////////////////////////////////////////////////////////////////////
function hideSideMenu(hamburgerMenuIcon, sideMenuContainer){
    crossToHamburger(hamburgerMenuIcon)

    $('div#container')
    .removeClass('slide-left')
    .addClass('slide-right')
    
    hamburgerMenuIcon.css('background-color', '#333645')

    sideMenuContainer
    .removeClass('toggle-side-menu-in')
    .addClass('toggle-side-menu-out')
    .hide()

}
/////////////////////////////////////////////////////////////////////
function showSideMenu(hamburgerMenuIcon, sideMenuContainer){
    hamburgerToCross(hamburgerMenuIcon)
    // resize page main container with accordingly
    $('div#container')
    .removeClass('slide-right')
    .addClass('slide-left')

    sideMenuContainer
    .addClass('toggle-side-menu-in')
    .css({
        display: 'block',
        'z-index': '100'
    })

    $('div#side-menu_background-filter')
    .on('click',
        ()=> {
            hideSideMenu(hamburgerMenuIcon, sideMenuContainer)
        }
    )
}
///////////////////////////////////////////////////////////////////
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
        //update scroll positon
        //also, for Mobile or negative scrolling
        prevScrollTop = currentScrollTop  <= 0 ? 0 : currentScrollTop
    })
}
//////////////////////////////////////////////////////////////////////////////////
function changeRebeccaTextContent(){
    const $latestNewsItemRebeccaTextContent = $('p#latest-news-item-rebecca-text-content')

    const rebeccaTextOptions = {
        sm: 'Celebrating the achievements and dedication of our staff, at Netmatters, we put aside some time each month to highlight ...', 
        md: 'Celebrating the achievements and dedication of our staff, at Netmatters, we put aside some time ...',
        lg: 'Celebrating the achievements and dedication of our staff, at Netmatters, we put aside some time each month to highlight the accomplishments of ...'
    }

    const mediaQueries = {
        sm: window.matchMedia('(min-width: 768px)'),
        md: window.matchMedia('(min-width: 992px)'),
        lg: window.matchMedia('(min-width: 1220px)')
    };

    ['sm', 'md', 'lg'].forEach(
        breakPoint => {
            if(mediaQueries[breakPoint].matches){
                $latestNewsItemRebeccaTextContent.text(rebeccaTextOptions[breakPoint])
            }
        }
    )
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
                backgroundColor : 'rgba(0, 0, 0, .7)'//darken background
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
export {
    hideSideMenu, showSideMenu, toggleStickyHeader, 
    changeRebeccaTextContent, displayCookieModal
}