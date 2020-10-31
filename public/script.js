var btn = document.querySelector(".btn");
var html =""


btn.onclick=()=>{

    var task = document.querySelector("input[name='task']").value;

    html += `\n${task}`

    document.querySelector(".taskarea").innerHTML = html
    html += '<br/>'

    document.querySelector("input[name='task']").innerHTML=""

}
