var c = 0;
function isLike(){
    c+=1;
    var like_counter = document.getElementById('likecount').textContent;
    var a =+ like_counter;
    var b;
    if (c%2 == 0){
        b =a-1;
        document.getElementById('like_heart').innerHTML = "favorite_border";
        document.getElementById('like_heart').classList.remove('heart_icon_fill');
    }else {
        b= a+1;
        document.getElementById('like_heart').innerHTML = "favorite";
        document.getElementById('like_heart').classList.add('heart_icon_fill');
    }
    document.getElementById('likecount').innerHTML = b;
    
    console.log(c);
    console.log(c%2);
}

document.getElementById('like_trigger').addEventListener('click',isLike);