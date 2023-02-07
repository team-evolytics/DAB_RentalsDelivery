var launchInterval_830_mtn = setInterval(function(){

    if($('#tabbed_booking_widget__desktop > div.row > div > button.tabbed_booking_widget__desktop__product.tabbed_booking_widget__product.col-xs-2.active').length > 0
    || $('#rentals-landing-page > div > div > div.rentals_filters__booking_type').length > 0
    || $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group').length > 0){
      runTest_830_mtn();
      clearInterval(launchInterval_830_mtn);
    }
}, 250);

function runTest_830_mtn(){
    // createElements_830_mtn();
    changeCellColor_830_mtn();
    revertButtons_mtn();
    createBigBrother_830_mtn();
}

function createElements_830_mtn(){
    var $e = $('<div>', {id: 'dab_parent_container_830', class: 'dab_parent_container_830'});

    let $deliverContainer = `
        <div class="arrow-up"></div>
        <div class="text_container_s" id="text_container_s">
            <div>
                <div class="truck_icon_s" id="truck_icon_s">
                    <div class="truck-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.0749 12.6985H27.6519V8.90067L24.9301 4.98605C24.5806 4.4832 24.0053 4.18279 23.3911 4.18279H18.5655V0.283875H1.79346C1.08205 0.283875 0.5 0.863852 0.5 1.57273V13.7308C0.5 14.4397 1.08205 15.0198 1.79346 15.0198H5.02048C5.26126 13.6245 6.47841 12.5617 7.94742 12.5617C9.41643 12.5617 10.6337 13.6245 10.8745 15.0198H20.5088C20.7495 13.6245 21.9668 12.5617 23.4359 12.5617C24.9049 12.5617 26.1222 13.6245 26.363 15.0198H28.0749C28.309 15.0198 28.5 14.83 28.5 14.597V13.1207C28.5 12.8888 28.309 12.6985 28.0749 12.6985ZM20.3821 10.6459V5.42671H23.3911C23.596 5.42671 23.7876 5.527 23.904 5.69431L26.4035 9.28939V10.6459H20.3821Z" fill="white"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M28.0749 12.6985H27.6519V8.90067L24.9301 4.98605C24.5806 4.4832 24.0053 4.18279 23.3911 4.18279H18.5655V0.283875H1.79346C1.08205 0.283875 0.5 0.863852 0.5 1.57273V13.7308C0.5 14.4397 1.08205 15.0198 1.79346 15.0198H5.02048C5.26126 13.6245 6.47841 12.5617 7.94742 12.5617C9.41643 12.5617 10.6337 13.6245 10.8745 15.0198H20.5088C20.7495 13.6245 21.9668 12.5617 23.4359 12.5617C24.9049 12.5617 26.1222 13.6245 26.363 15.0198H28.0749C28.309 15.0198 28.5 14.83 28.5 14.597V13.1207C28.5 12.8888 28.309 12.6985 28.0749 12.6985ZM20.3821 10.6459V5.42671H23.3911C23.596 5.42671 23.7876 5.527 23.904 5.69431L26.4035 9.28939V10.6459H20.3821Z" fill="white"/></path>
                        </svg>
                    </div>
                    <div class="wheel-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <path d="M2.43612 0.359665C1.23613 0.359665 0.263184 1.32899 0.263184 2.5244C0.263496 3.72012 1.23613 4.68929 2.43596 4.68929C3.63579 4.68929 4.60858 3.72012 4.60858 2.5244C4.60858 1.32899 3.63564 0.359665 2.43612 0.359665Z" fill="white"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M2.43612 0.359665C1.23613 0.359665 0.263184 1.32899 0.263184 2.5244C0.263496 3.72012 1.23613 4.68929 2.43596 4.68929C3.63579 4.68929 4.60858 3.72012 4.60858 2.5244C4.60858 1.32899 3.63564 0.359665 2.43612 0.359665Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="wheel-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                        <path d="M2.94768 0.359665C1.748 0.359665 0.774902 1.32899 0.774902 2.5244C0.774902 3.71981 1.74785 4.68929 2.94768 4.68929C4.14751 4.68929 5.1203 3.72012 5.1203 2.5244C5.1203 1.32868 4.14735 0.359665 2.94768 0.359665Z" fill="white"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M2.94768 0.359665C1.748 0.359665 0.774902 1.32899 0.774902 2.5244C0.774902 3.71981 1.74785 4.68929 2.94768 4.68929C4.14751 4.68929 5.1203 3.72012 5.1203 2.5244C5.1203 1.32868 4.14735 0.359665 2.94768 0.359665Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <h3 class="modal_txt_banner" id="banner_text_s">CHOOSE DELIVERY</h3>
            </div>
            <h4 class="modal_txt_content" id="inner_text_s">Boots and gear brought to your hotel or vacation home.</h4>
        </div>
    `

    let path = window.location.pathname;
    if (path === '/'){
        $e.insertAfter('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div');
    } else if (path === '/delivery/ski-rental-delivery.aspx'){
        $e.insertAfter('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div');            
    }
    $e.append($deliverContainer);
}

function changeCellColor_830_mtn(){
    $('.text_container_s').css({'background-color':'#161d65'});
    $('.arrow-up').css({'border-bottom':'8px solid ' + '#161d65'});
}

function createBigBrother_830_mtn(){

    $('#dab_parent_container_830').css({'top':'-12px'});

    const targetNode830 = $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1)')[0];
    const config830 = {attributes: true, childList: true, subtree: true};
    const callback830 = (mutationList830, observer830) => {
        for (const mutation830 of mutationList830) {
            if (mutation830.type === 'childList' && $('#dab_parent_container_830').length === 0){
                createElements_830_mtn();
                runTest_830_mtn();
                $('#dab_parent_container_830').css({'top':'-12px'});
                
                revertButtons_mtn();
            }
        }
    }
    const observer830 = new MutationObserver(callback830);
    observer830.observe(targetNode830, config830);
}

function revertButtons_mtn(){
    let x_len = window.innerWidth;
    let path = window.location.pathname;

    if (x_len < 767) {
        if (path === '/'){
            $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(1) > h3.visible-xs.c155__mobilecheckbox--v2').remove();
            $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(2) > h3.visible-xs.c155__mobilecheckbox--v1').remove();
            console.log('this path is running');
        } else if (path === '/delivery/ski-rental-delivery.aspx'){
            $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(1) > h3.visible-xs.c155__mobilecheckbox--v1').remove();
            $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(2) > h3.visible-xs.c155__mobilecheckbox--v2').remove();
        }
        $('h3[class*="hidden-xs"]').removeClass('hidden-xs')
    }

    // fix this
    for (let i = 0; i < 2; i++){
        $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div > label:nth-child(2) > h3').children().remove()
    }
    if ($('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(2) > h3').children().length < 1){
        var infoIcon = `<i class="glyphicon icon-global-info" id="pickup_delivery_icon" tabindex="0" role="button" aria-label="Restrictions Info"></i>`
        $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div.rentals_filters__radio_group > label:nth-child(2) > h3').append(infoIcon);

        clickInfoIcon_830_mtn();
    }
}
function clickInfoIcon_830_mtn(){
    $('i[id*="pickup_delivery_icon"]').on('click', () => {
        $('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > h4 > button > i').trigger('click');
        console.log('button click');
    });
}