var RADIUS = 1,//定义圆半径
MarginTop = 0,//距离上面的位置
MarfinLeft = 0,//距离左边的位置
COLOR = '#000000';//球的颜色
window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = '250';//画布大小
    canvas.height = '100';
    var context = canvas.getContext('2d');

    setInterval(function(){//定时器
        var d = new Date();
        var _yyyy = d.getFullYear();
        var _m = d.getMonth();// (0-11)
        var _d = d.getDate();
        var h = d.getHours(); 
        var m = d.getMinutes();
        var s = d.getSeconds();
        canvas.height = canvas.height;
        renderDate(context, _yyyy, _m, _d);
        renderTiem(context,h,m,s);
    },1000); 
}

function renderDate(cxt, _yyyy, _m, _d) {//画球(日期)
    var date_left = 8;
    var ary_y = _yyyy.toString().split('');
    for (var i=0; i< ary_y.length; i++) {
        renderDigit(date_left, 0, parseInt(ary_y[i]) + 10, cxt);
        date_left = date_left + 20;
    }
    renderDigit(date_left, 0, 21, cxt);
    date_left = date_left + 20;
    var ary_m = _m.toString().split('');
    
    if (ary_m.length == 1) {
        renderDigit(date_left, 0, 10, cxt);
        date_left = date_left + 20;
    }

    for (var i=0; i< ary_m.length; i++) {
        renderDigit(date_left, 0, parseInt(ary_m[i]) + 11, cxt);
        date_left = date_left + 20;
    }
    
    renderDigit(date_left, 0, 21, cxt);
    date_left = date_left + 20;

    var ary_d = _d.toString().split('');
    for (var i=0; i< ary_d.length; i++) {
        renderDigit(date_left, 0, parseInt(ary_d[i]) + 10, cxt);
        date_left = date_left + 20;
    }
}

function renderTiem(cxt,h,m,s) {//画球(时间)
    renderDigit(MarfinLeft, 40, parseInt(h/10), cxt)
    renderDigit(MarfinLeft+15*(RADIUS+1), 40, parseInt(h%10), cxt)
    renderDigit(MarfinLeft+30*(RADIUS+1), 40, 20, cxt)
    renderDigit(MarfinLeft+39*(RADIUS+1), 40, parseInt(m/10) , cxt)
    renderDigit(MarfinLeft+54*(RADIUS+1), 40, parseInt(m%10) , cxt)
    renderDigit(MarfinLeft+69*(RADIUS+1), 40, 20, cxt)
    renderDigit(MarfinLeft+78*(RADIUS+1), 40, parseInt(s/10) , cxt)
    renderDigit(MarfinLeft+93*(RADIUS+1), 40, parseInt(s%10) , cxt)
}

function renderDigit(x, y, num, cxt) {//每个数字的画法
    cxt.fillStyle=COLOR;
    for(var i = 0; i < digit[num].length; i ++ ) {
        for(var j = 0; j < digit[i].length; j++ ) {
            if(digit[num][i][j] == 1) {
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}