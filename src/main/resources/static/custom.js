//
//var map;
//var coords = {lat: 39.9612, lng: -82.9988}
//
//function initMap() {
//    map = new google.maps.map(document.getElementById('map'), {
//        center: coords,
//        zoom: 10,
//        scrollwheel: false
//    })
//}
//
//var image = {
//    url: '/custom_marker.png',
//    scaledSize: new google.maps.Size(50,50)
//}
//
//var marker = new google.maps.marker({
//    position: coords,
//    map: map,
//    icon: image,
//    animation: google.maps.Animation.BOUNCE
//})
//
//var contentString = '<h2>' + city + ', ' + state + ', where your dreams come true!</h2>';
//
//var infowindow = new google.maps.InfoWindow({
//    content: contentString;
//})
//
//google.maps.event.addEventListener(marker, 'click', function() {
//    infowindow.open(map, marker)
//})

let map;
//let marker;
// let coords = {lat: 35.227085, lng: -80.843124};
//let contentString = '<h2>' + city + ', ' + state + '</h2>';



function initMap() {

    let infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    let image = {url: '/flower.png', scaledSize: new google.maps.Size(50,50)};

    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 10,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
    });

    var contentString = '<h2>' + city + ', ' + state + '</h2>';

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });

}