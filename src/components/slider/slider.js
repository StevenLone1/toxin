
import 'nouislider/dist/nouislider.min.js'
import 'nouislider/dist/nouislider.css'
import noUiSlider from 'nouislider'

var priceSlider = document.getElementById('slider_id');

noUiSlider.create(priceSlider, {
    connect: true,
    behaviour: 'tap',
    start: [5000, 10000],
    range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [0],
        'max': [20000]
    },
    step: 1000,
});

priceSlider.noUiSlider.on('change', (values,handle) =>{
    var prices = priceSlider.noUiSlider.get(true);
    var left_price = prices[0].toLocaleString();
    var right_price = prices[1].toLocaleString();
    document.getElementById('price_text').innerHTML = left_price + '₽ - '+ right_price + '₽';
});