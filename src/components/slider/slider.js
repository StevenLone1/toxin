// import 'ion-rangeslider/js/ion.rangeSlider.js'
// import 'ion-rangeslider/css/ion.rangeSlider.css'
import 'nouislider/dist/nouislider.min.js'
import 'nouislider/dist/nouislider.css'
import noUiSlider from 'nouislider'

// $("#slider_id").ionRangeSlider({
//     type: "double",
//     grid: false,
//     min: -1000,
//     max: 1000,
//     from: -500,
//     to: 500,
//     step: 250,
//     skin: "round",
//     hide_min_max:true,
// });
var nonLinearSlider = document.getElementById('slider_id');

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    start: [5000, 20000],
    range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [0],
        '10%': [1000, 1000],
        '50%': [10000, 5000],
        'max': [50000]
    }
});