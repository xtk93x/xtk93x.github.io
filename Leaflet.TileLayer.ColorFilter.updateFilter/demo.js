let map = L.map('map', { zoomControl: false }).setView([51.505, -0.09], 14);

let tileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: []
}).addTo(map);

let blur = '0px';
let opacity = '100%';
let invert = '0%';
let bright = '100%';
let contrast = '100%';
let gray = '0%';
let hue = '0deg';
let saturate = '100%';
let sepia = '0%';

let updateMyTiles = function () {
    newFilter = [
        `blur:${blur}`,
        `grayscale:${gray}`,
        `invert:${invert}`,
        `bright:${bright}`,
        `contrast:${contrast}`,
        `hue:${hue}`,
        `opacity:${opacity}`,
        `saturate:${saturate}`,
        `sepia:${sepia}`,
    ];
    tileLayer.updateFilter(newFilter);

    filterSettingsBox.innerHTML = `
        let myFilter = [${newFilter.map(o => `'${o}'`)}];
    `;
}

let updateBasemapUrl = function () {
    map.removeLayer(tileLayer);
    tileLayer =  L.tileLayer.colorFilter(document.getElementById('url-input').value, {
        attribution: 'Development Only - Don\'t forget the attribution for production :)'
    }).addTo(map);
    updateMyTiles();
}

/* Blur slider */
let blurSlider = document.getElementById('blur-slider');
let blurLabel = document.getElementById('blur-value');
blurSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    blurLabel.textContent = value + 'px';
    blur = value + 'px';
    updateMyTiles();
});

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

/* Contrast Slider */
let contrastSlider = document.getElementById('contrast-slider');
let contrastLabel = document.getElementById('contrast-value');
contrastSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    contrastLabel.textContent = value + '%';
    contrast = value + '%';
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

/* Opacity Slider */
let opacitySlider = document.getElementById('opacity-slider');
let opacityLabel = document.getElementById('opacity-value');
opacitySlider.addEventListener('input', function (e) {
    let value = e.target.value;
    opacityLabel.textContent = value + '%';
    opacity = value + '%';
    updateMyTiles();
});

/* Saturate Slider */
let saturateSlider = document.getElementById('saturate-slider');
let saturateLabel = document.getElementById('saturate-value');
saturateSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    saturateLabel.textContent = value + '%';
    saturate = value + '%';
    updateMyTiles();
});

/* Sepia Slider */
let sepiaSlider = document.getElementById('sepia-slider');
let sepiaLabel = document.getElementById('sepia-value');
sepiaSlider.addEventListener('input', function (e) {
    let value = e.target.value;
    sepiaLabel.textContent = value + '%';
    sepia = value + '%';
    updateMyTiles();
});

/* Filter Settings Box */
let filterSettingsBox = document.getElementById('filter-settings');

/* Reset Settings */
let resetSettings = function () {
    blur = '0px';
    blurSlider.value = '0';
    blurLabel.textContent = '0px';
    opacity = '100%';
    opacitySlider.value = '100';
    opacityLabel.textContent = '100%';
    invert = '0%';
    invertSlider.value = '0';
    invertLabel.textContent = '0%';
    bright = '100%';
    brightnessSlider.value = '100';
    brightnessLabel.textContent = '100%';
    contrast = '100%';
    contrastSlider.value = '100';
    contrastLabel.textContent = '100%';
    gray = '0%';
    grayscaleSlider.value = '0';
    grayscaleLabel.textContent = '0%';
    hue = '0deg';
    hueSlider.value = '0';
    hueLabel.textContent = '0deg';
    saturate = '100%';
    saturateSlider.value = '100';
    saturateLabel.textContent = '100%';
    sepia = '0%';
    sepiaSlider.value = '0';
    sepiaLabel.textContent = '0%';
    updateMyTiles();
}