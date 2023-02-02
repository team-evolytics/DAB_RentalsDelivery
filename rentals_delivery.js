
// console.log('INJECTOR IS WORKING');

var launchInterval_830 = setInterval(function(){

    if($('#tabbed_booking_widget__desktop > div.row > div > button.tabbed_booking_widget__desktop__product.tabbed_booking_widget__product.col-xs-2.active').length > 0
    || $('#rentals-landing-page > div > div > div.rentals_filters__booking_type').length > 0){
      runTest_830();
      clearInterval(launchInterval_830);
    }
}, 250);

function runTest_830(){
    createElements_830();
    changeCellColor_830();
}

function createElements_830(){
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

    // fix this section here

    let path = window.location.pathname;

    if (path === '/'){
        $e.insertAfter('#tabbed_booking_widget_rentals_winter_1 > div > div > div.rentals_filters__booking_type > div');
        $e.insertAfter('#rentals-booking-widget > div > div.rentals_booking_widget__form > div:nth-child(1) > div.rentals_filters__booking_type > div');
    } else if (path === '/plan-your-trip/rentals/winter-equipment.aspx'){
        $e.insertAfter('#rentals-landing-page > div > div > div.rentals_filters__booking_type > div')
    } 
    $e.append($deliverContainer);
}

function changeCellColor_830(){
    let website = window.location.host;

    let color_dictionary = {
        'www.breckenridge.com' : '#d71920'
        , 'www.keystoneresort.com' : '#10609e'
        , 'www.skicb.com' : '#a6192e'
        , 'www.beavercreek.com' : '#176999'
        , 'www.vail.com' : '#006cd1'
        , 'www.parkcitymountain' : '#99191a'
        , 'www.northstarcalifornia.com' : '#2f5b7b'
        , 'www.skiheavenly.com' : '#971116'
        , 'www.whistlerblackcomb.com' : '#bf2c37'
        , 'www.epicmountainrentals.com' : '#161d65'
    }

    $('.text_container_s').css({'background-color':color_dictionary[website]});
    $('.arrow-up').css({'border-bottom':'8px solid ' + color_dictionary[website]});
}