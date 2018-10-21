let map = L.map('map').setView([51.505, -0.09], 14);

let tileLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
}).addTo(map);

let mapCf = L.map('map-cf').setView([51.505, -0.09], 14);

let tileLayerCf = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: ['grayscale:10%', 'invert:20%', 'brightness:80%', 'contrast:130%', 'sepia:40%', 'hue-rotate:120deg', 'blur:0px', 'saturate:400%']
}).addTo(mapCf);
