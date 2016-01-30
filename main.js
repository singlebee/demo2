/**
 * Created by zjf14 on 2016/1/29.
 */

var innerH = window.innerHeight;
var innerW = window.innerWidth;
var arr = [-1,0,1,2,3,4,5];//索引.
//初始化
function init(){
    showPic();
    main();
}
function showPic(){

    for (var i = 5; i>0;i--) {
        $("#img"+i).css("transition","transform 0.5s");
        $("#img"+i).css("transform", 'translate3d('+ arr[i]*innerW +'px, 0, 0)');
    }
}
function main(){
    var startX,moveX,endX,trueMoveX,trueEndX;
    //鼠标起始点
    function touchstart(event){
        event.preventDefault();
        var touch = event.touches[0];
        startX = touch.pageX;
      // document.getElementById("p1").innerHTML=startX;
    }
    document.addEventListener('touchstart',touchstart, false);
    //鼠标移动点
    function touchmove(event){
        event.preventDefault();
        var touch = event.touches[0];
        moveX = touch.pageX;
        trueMoveX = moveX - startX;
        imgMove(trueMoveX)
    }
    document.addEventListener('touchmove',touchmove, false);
    //鼠标结束点
    function touchend(){
        var touch = event.changedTouches[0];
        endX = touch.pageX-startX;
        moveEnd(endX)
    }
    document.addEventListener('touchend',touchend, false);
}

function moveEnd(x){
    var seed = x/innerW;
    if(seed>0.33){
        if (arr[1] < 0) {
            for (var i = 1; i < 6; i++) {
                arr[i]++;
                showPic();
            }
        }
        else{
            showPic()
        }
    }
    else if(seed<-0.33) {
        if (arr[1] > -4) {
            for (var i = 1; i < 6; i++) {
                arr[i]--;
                showPic();
            }
        }
        else{
            showPic()
        }
    }
    else{
        showPic();
    }
   // document.getElementById("p3").innerHTML=arr;

}


function imgMove(x){
    //document.getElementById("p2").innerHTML = x;
    for (var i = 1; i<6;i++) {
        $("#img"+i).css("transition","transform 0s");
        $("#img"+i).css("transform", 'translate3d('+ (arr[i]*innerW + x) +'px, 0, 0)');
    }
}