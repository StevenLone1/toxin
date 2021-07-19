import '../checkbox_buttons/checkbox_buttons.scss'
var c = 0;
document.getElementById('checkbox_trigger').addEventListener('click',isExpand);
function isExpand(){
    c+=1;
    

    if (c%2 == 0){
        document.getElementById('expand_icon').innerHTML = "expand_more";
        document.getElementById('expand_list').classList.add('expandable_list_none');
    }else {
        document.getElementById('expand_icon').innerHTML = "expand_less";
        document.getElementById('expand_list').classList.remove('expandable_list_none');
    }
}
