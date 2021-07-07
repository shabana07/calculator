
function getData(e){
    var input = document.getElementById('input');
    var x = input.value;
    input.value += e.value;
    if(e.value == "C"){
        input.value = "";
    }
    else if(e.value == "←"){
        var a = input.value;
        var b = a.slice(0,-2)
         input.value = b
    }
    
    else if(e.value == "="){
        var a = input.value;
        var b = a.slice(0,-1)
         input.value = eval(b);
    }
    else if(e.value == "√"){
        var a = input.value;
        var b = a.slice(0,-1)
         input.value = Math.sqrt(b);
    }
    
}