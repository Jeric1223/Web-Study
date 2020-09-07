let num = 0;
function input(){
    let input = document.getElementById("Input_Bar").value;
    num = input;
}
function GooGoodan(){
    input();
    if(num > 9){
        alert('구구단은 9단까지입니다.');
        document.getElementById("Input_Bar").value = null;
    }
    else{
        document.write('<link rel="stylesheet" type="text/css" href="./GooGooDan.css">');
        document.write('<p class="GooGoodan_text">' + num + "단" + "</p>" +"<br>");
        for(var i=1;i<=9;i++)
        {
            document.write('<p class="GooGoodan_text">'+ num + "x" + i + "=" + num*i + "</p>" + "<br>");
        }
    }
}