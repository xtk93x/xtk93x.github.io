let map = L.map('map').setView([51.505, -0.09], 14);

let tileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: []
}).addTo(map);

let invert = '0%';
let bright = '100%';
let gray = '0%';
let hue = '0deg';

let updateMyTiles = function () {
    tileLayer.updateFilter([`grayscale:${gray}`, `invert:${invert}`, `bright:${bright}`, `hue:${hue}`]);
}

/* Invert slider */
let invertSlider = document.getElementById('invert-slider');
let invertLabel = document.getElementById('invert-value');
invertSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    invertLabel.textContent = value + '%';
    invert = value + '%';
    updateMyTiles();
});

/* Grayscale slider */
let grayscaleSlider = document.getElementById('grayscale-slider');
let grayscaleLabel = document.getElementById('grayscale-value');
grayscaleSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    grayscaleLabel.textContent = value + '%';
    gray = value + '%';
    updateMyTiles();
});

/* Brightness Slider */
let brightnessSlider = document.getElementById('brightness-slider');
let brightnessLabel = document.getElementById('brightness-value');
brightnessSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    brightnessLabel.textContent = value + '%';
    bright = value + '%';
    updateMyTiles();
});

/* Hue Slider */
let hueSlider = document.getElementById('hue-slider');
let hueLabel = document.getElementById('hue-value');
hueSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    hueLabel.textContent = value + 'deg';
    hue = value + 'deg';
    updateMyTiles();
});