function showNavigationDropDown(){
    const navBgColor = '#333645'
    const $triangles = $('#triangles')
    const $mainNavigationDropdown = $('#main-navigation-dropdown')
    const dropDownMenuBgColorOptions = {
        'bs': {
            navItemHover: '#67809f;',
            navItemInfo:'#526781'
        },
        'it': {
            navItemHover: '#4183d7',
            navItemInfo:'#286abd'
        },
        'dm': {
            navItemHover: '#2ecc71',
           navItemInfo:'#25a25a'
        },
        'ts': {
            navItemHover: '#d64541',
           navItemInfo:'#bc2c28'
        },
        'wd': {
            navItemHover: '#926fb1',
           navItemInfo:'#79539a'
        },
        'cs': {
            navItemHover: '#f62459',
           navItemInfo:'#de093f'
        },
        'dc': {
            navItemHover: '#ce4125',
           navItemInfo:'#a3331d'
        }
    }

    const activeNavItemConfig = {
        link: false, 
        info: false,
        prevActiveNavItemClassSuffix: '',
        activeNavItemInfoDisplay: 'none',
    };

    // ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc']
    // .forEach(
    //     classSuffix => {
    //         $(`.nav-item-${classSuffix}`).on(
    //             'mouseenter', ()=> {
    //                 if(activeNavItemConfig.prevActiveNavItemClassSuffix && activeNavItemConfig.prevActiveNavItemClassSuffix != classSuffix){
    //                     //hide drop-down content
    //                     $(`.nav-item-info-${activeNavItemConfig.prevActiveNavItemClassSuffix}`).css('display',  'none')
    //                 }
    //                 // update previous suffix
    //                 activeNavItemConfig.prevActiveNavItemClassSuffix = classSuffix
                    
    //                 // display arrow
    //                 $triangles.css('display', 'flex')
    //                 $(`#nav-item-triangle-${classSuffix}`).css('display', 'block')
    //                 //display info for current/active nav item
    //                 $mainNavigationDropdown.css(
    //                     {
    //                         display: 'flex',
    //                         'flex-direction': 'column',
    //                         'background-color': dropDownMenuBgColorOptions[classSuffix].navItemInfo
    //                     }
    //                 ) 
    //                 $(`#nav-item-info-${classSuffix}`).css({
    //                     display: 'block',
    //                     'background-color': dropDownMenuBgColorOptions[classSuffix].navItemInfo
    //                 })
    //                 $(`#nav-item-dropdown-option-wrapper-${classSuffix}`).css('display', 'block')

    //                 // $mainNavigationDropdown.on(
    //                 //     'mouseover',
    //                 //     ()=> {
    //                 //         $(`.nav-item-${classSuffix}`).css({
    //                 //             color: 'white',
    //                 //             'background-color': dropDownMenuBgColorOptions[classSuffix].navItemHover
    //                 //         })
    //                 //         $(`.nav-icon-${classSuffix}`).css('color', 'white')
    //                 //     }
    //                 // )

    //                 $mainNavigationDropdown.on(
    //                     'mouseleave', ()=> {
    //                         $(`#nav-item-dropdown-option-wrapper-${classSuffix}`).css('display', 'none')
    //                         $(`#nav-item-info-${classSuffix}`).css('display', 'none')
    //                         $mainNavigationDropdown.css('display', 'none')
    //                         $(`#nav-item-triangle-${classSuffix}`).css('display', 'none')
    //                         $triangles.css('display', 'none')
    //                     }
    //                 )
    //             }
    //         )
    //         // $(`.nav-item-${classSuffix}`).on(
    //         //     'mouseleave', ()=> {
    //         //         $(this).css('background-color', navBgColor)
    //         //     }
    //         // )
    //         // $(`.nav-item-${classSuffix} .triangle`).on(
    //         //     'mouseover',
    //         //     ()=> {
    //         //         $(`.nav-item-${classSuffix}`).css({
    //         //             color: 'white',
    //         //             'background-color': dropDownMenuBgColorOptions[classSuffix].navItemHover
    //         //         })
    //         //     }
    //         // )
    //     }
    // )
    
}
//////////////////////////////////////////////////////////////////////////////////////////
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
function showSideMenu(hamburgerMenuIcon, sideMenu){
    hamburgerToCross(hamburgerMenuIcon)
    // resize page main container with accordingly
    $('div#container')
    .removeClass('slide-right')
    .addClass('slide-left')
    // .css('backgroundColor', 'rgba(0, 0, 0, .7)')

    sideMenu
    .show()
    .addClass('toggle-side-menu-in')
    .css('right', '0')
}
/////////////////////////////////////////////////////////////////////
function hideSideMenu(hamburgerMenuIcon, sideMenu){
    crossToHamburger(hamburgerMenuIcon)

    $('div#container')
    .removeClass('slide-left')
    .addClass('slide-right')
    // .css('filter', 'grayscale(0%)')

    sideMenu
    .removeClass('toggle-side-menu-in')
    .addClass('toggle-side-menu-out')
    .hide(0)

    hamburgerMenuIcon
    .css(
        'background-color', '#333645'
    )
    .hover(
        ()=> {
            $(this).css(
                {
                    'background-color': '#22242e',
                    'border-color': '#191a22'
                }
            )
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
function toggleClientTooltip(){
    const clients = ['black-swan', 'beat', 'survey-solutions', 'girl-guiding', 'sweetzy', 'one-traveller', 'xupes']
    clients.forEach(
        client => {
            //show tooltip
            $(`div.client-logo-container.${client}`)
            .on(
                'mouseover', 
                ()=>{
                    $(`div.tooltip-container.${client}`).css({
                        display : 'flex'
                    })
                    $(`div.tooltip-container.${client} div.tooltip-arrow`).css({
                        display : 'block'
                    })
                }
            )
            //hide tooltip
            $(`div.carousel-item.${client}`)
            .on(
                'mouseleave', 
                ()=> {
                    $(`div.tooltip-container.${client}`).css({
                        display : 'none'
                    })
                    $(`div.tooltip-container.${client} div.tooltip-arrow`).css({
                        display : 'none'
                    })
                }
            )
        }
    )
}
//////////////////////////////////////////////////////////////////////////////////
function determineOwlCarouselItems(){
    let items;

    const mediaQueries = {
        xs: window.matchMedia('(min-width: 576px)'),
        sm: window.matchMedia('(min-width: 768px)'),
        md: window.matchMedia('(min-width: 992px)'),
        lg: window.matchMedia('(min-width: 1220px)')
    }

    if(mediaQueries['lg'].matches){
        return items = 6
    }else if(mediaQueries['md'].matches){
        return items = 4
    }else{
        return items = 3
    }
}
//////////////////////////////////////////////////////////////////////////////////
// display cookie modal
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
    showNavigationDropDown, showSideMenu, hideSideMenu, toggleStickyHeader, 
    changeRebeccaTextContent, toggleClientTooltip, determineOwlCarouselItems, displayCookieModal
}