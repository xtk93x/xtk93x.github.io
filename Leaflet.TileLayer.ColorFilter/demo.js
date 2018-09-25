let defaultMap = L.map('map-default').setView([51.505, -0.09], 14);
let darkMap = L.map('map-dark').setView([51.505, -0.09], 14);
let darkColorizedMap = L.map('map-dark-colorized').setView([51.505, -0.09], 14);
let colorizedMap = L.map('map-colorized').setView([51.505, -0.09], 14);
let colorized2Map = L.map('map-colorized-2').setView([51.505, -0.09], 14);
let dark2Map = L.map('map-dark-2').setView([51.505, -0.09], 14);

let darkSettings = [
    'grayscale:100%',
    'invert:100%',
]

let darkColorizedSettings = [
    'hue:185deg',
    'invert:100%',
]

let colorizedSettings = [
    'invert:30%',
    'hue:130deg',
    'saturate:700%',
    'brightness:90%',
    'contrast:200%',
]

let colorized2Settings = [
    'brightness:110%',
    'hue:90deg',
    'saturate:120%',
]


let dark2Settings = [
    'brightness:95%',
    'contrast:130%',
    'hue:290deg',
    'invert:100%',
    'saturate:300%',
];

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
}).addTo(defaultMap);

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: darkSettings
}).addTo(darkMap);

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: colorized2Settings
}).addTo(colorized2Map);

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: darkColorizedSettings
}).addTo(darkColorizedMap);

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: colorizedSettings
}).addTo(colorizedMap);

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: dark2Settings
}).addTo(dark2Map);