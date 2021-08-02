import 'air-datepicker/dist/js/datepicker.js'
import 'air-datepicker/dist/css/datepicker.css'
import { now } from 'jquery';


document.addEventListener('DOMContentLoaded', function(){
    const dateDropdowns = document.querySelectorAll('.date-dropdown_inner');

    for(let i=0;i<dateDropdowns.length;i++){
        let firstInput = "#"+dateDropdowns[i].querySelector(".date-dropdown_first").getAttribute("id");
        let secondInput = "#"+dateDropdowns[i].querySelector(".date-dropdown_second").getAttribute("id");
        
        
        

        $(firstInput).datepicker({
            language: {
                days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
                daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
                daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
                today: 'Применить',
                clear: 'Очистить',
                dateFormat: 'dd.mm.yyyy',
                timeFormat: 'hh:ii',
                firstDay: 1
                
            },
            // inline: true,
            range: true,
            clearButton: true,
            autoClose: true,
            prevHtml: '<span class="material-icons">arrow_back</span>',
            nextHtml: '<span class="material-icons">arrow_forward</span>',
            todayButton: true,
            navTitles: {
                days: 'MM yyyy'
            },
            
            
            onSelect: function (fd){
                $(firstInput).val(fd.split("-")[0]);
                $(secondInput).val(fd.split("-")[1]);
            }
        });
        $(secondInput).on("click",function(){
            $(firstInput).data('datepicker').show();
        });

        const acceptButton = document.querySelectorAll("[data-action='today']");
        $(acceptButton).on("click", function(){
            $(firstInput).data("datepicker").hide();
        })
    }
});