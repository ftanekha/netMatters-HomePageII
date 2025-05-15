import {toggleSideMenu, toggleStickyHeader, displayCookieModal, shouldPostData, displaySuccessMessage} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        $(()=>{
            const netmattersBlack = '#333645'
            // stop all anchor tags misbehaving
            $('a').not('.functional').on('click', (ev)=> ev.preventDefault())
            /*COOKIE POPUP POLICY & consent management*/
            displayCookieModal()
            const $cookiSettingsButton = $('.cookie-settings-btn')
            $cookiSettingsButton.on('click', ()=> displayCookieModal(true))
            /*CAROUSEL///Banner///*/
            $('div#banner').slick(
                {//configuration object
                    autoplay: false,
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true
                }
            )
            /* SIDE MENU////////////////////
            toggle the Side Menu using the hamburger menu button*/
            const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
            $hamburgerMenuIcon
            .on('click', toggleSideMenu)
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
            .on('mouseleave', ()=> $hamburgerMenuIcon.css('background-color', netmattersBlack))
            //
            $('#side-menu_background-filter').on('click', toggleSideMenu)
            /* STICKY HEADER*/
            //determine the scroll direction using the scroll position on the document object
            //only show the sticky header wher the user scrolls UP
            toggleStickyHeader()
            /* NAV drop-down menu*/
            const navItemIconColors = {
                'bs': '#67809f',
                'it': '#4183d7',
                'dm': '#2ecc71', 
                'ts': '#d64541', 
                'wd': '#926fb1', 
                'cs': '#f62459', 
                'dc': '#ce4125'
            }; 
        
            ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc'].forEach(
                classSuffix => {
                    $(`.${classSuffix}`)
                    .on('mouseover', 
                        ()=> $(`.${classSuffix}`).css('color', 'white')
                    )
                }
            );
            
            ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc'].forEach(
                classSuffix => {
                    $(`.${classSuffix}`)
                    .on('mouseleave', 
                        ()=> $(`span.${classSuffix}`).css('color', navItemIconColors[classSuffix])
                    )
                }
            )
            /*CAROUSEL///Acccreditations///*/
            const accreditationsCarouselSettings = {
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 6,
                draggable: true
            }
            $('div.accreditations-container').slick(accreditationsCarouselSettings)
            /*CAROUSEL///Clients & Partners///*/
            $('.owl-carousel')
            .owlCarousel({
                loop: true, 
                autoplay: true, 
                autoplayTimeout: 3200,
                autoplayHoverPause:true,
                mouseDrag: false,
                responsive:{
                    0: {
                        items: 1
                    },
                    300: {
                        items: 2
                    },
                    550: {
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
        
            //* CONTACT US*/
        
            /* FORM VALIDATION USING HTML form action attribute to send data*/
            /*
            const $sendEnquiryButton = $('#send-enquiry-button')
            $sendEnquiryButton.on('click', ()=>{
                //check for empty fields
                displaySuccessMessage()
            })
            */
            if(window.location.href.includes('contact-us.php')){
                const $form = $('#form')
                const $name = $('#name')
                const $company = $('#company')
                const $email = $('#email')
                const $telephone = $('#telephone')
                const $message = $('#message')
                const $successMessage = $('p#success-message')
                const $failureMessage = $('p#failure-message')
                const $successOrFailureMessageContainer = $('div#success-or-failure-message-container')
                /*Input fields*/
                $('.form-control').on(
                    'focus', ()=> $('.form-control').css({
                        'border-color': '#ccc',
                        'background-color': '#fff'
                    })
                )
                /*Checkbox*/ 
                const $checkBox = $('div#checkbox')
                const $checkMark = $('span#checkmark')
                let marketing = 'no'
        
                $checkBox.on(
                    'click', 
                    ()=> { 
                        if($checkMark.css('visibility') === 'hidden'){
                            $checkBox.css('background-color', netmattersBlack)
                            $checkMark.css('visibility', 'visible')
                            marketing = 'yes'
                        }else{
                            $checkMark.css('visibility', 'hidden')
                            $checkBox.css('background-color', 'white')
                            marketing = 'no'
                        }
                    }
                )
                /*Form*/ 
                $form.on(
                    'click',
                    ()=> $successOrFailureMessageContainer.css('display','none')
                )
        
                $form.on(
                    'submit',
                    (ev)=>{
                        ev.preventDefault()
                        const formData = {
                            name: $name.val(),
                            company: $company.val(),
                            email: $email.val(),
                            telephone: $telephone.val(),
                            message : $message.val(),
                            marketing
                        }
                        //Validate form data
                        let [shouldPostDataResult, shouldPostDataInvalidFieldName] = shouldPostData()
            
                        if(shouldPostDataResult){
                            const requestOptions = {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(formData)
                            }
                            //POST data & display success message
                            fetch("/post-form-data.php", requestOptions)
                            .then(res => {
                                if(res.ok && res.status === 200){
                                    return res.json()
                                }
                            })//handle bad response from server
                            .then(data => {
                                if(Array.isArray(data)){
                                    console.table(data[0])
                                    console.warn(data[1])
                                }else{
                                    console.info(data)
                                    $failureMessage.css('display', 'none')
                                    $successMessage.css('display','block')
            
                                    $successOrFailureMessageContainer.css('background-color', '#2ecc71')
            
                                    displaySuccessMessage()
                                    
                                    document.querySelector('#form').reset()
                                }
                            })
                            .catch(err => console.error(err))
                        }else{
                            // highlight missing field
                            switch(shouldPostDataInvalidFieldName){
                                case 'name': $name.css('border-color', '#d64541')
                                break;
                                case 'company': $company.css('border-color', '#d64541')
                                break;
                                case 'email': $email.css('border-color', '#d64541')
                                break;
                                case 'telephone': $telephone.css('border-color', '#d64541')
                                break;
                                case 'message': $message.css('border-color', '#d64541')
                                break;
                            }
                            //display failure notice 
                            const failureNotice = `The ${shouldPostDataInvalidFieldName} format is incorrect.`
            
                            $successMessage.css('display', 'none')
                            
                            $failureMessage.text(failureNotice)
                            $failureMessage.css('display', 'block')
                            $failureMessage.css('color', '#a94442')
        
                            $successOrFailureMessageContainer.css('background-color', '#f2dede')
                            $successOrFailureMessageContainer.css('border-color', '#ebccd1')
                            
                            displaySuccessMessage()
                        }
                    }
                )
                /*Accordion*/ 
                const $accordion = $('div#accordion') 
                const $accordionControl = $('.accordion-control') 
                const $footer = $('footer')
        
                $footer.css('transition', '.5s ease-in-out')
        
                $accordionControl.on('click', ()=> $accordion.slideToggle())
            }
        })
    }
)