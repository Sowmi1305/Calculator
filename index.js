let dis=document.getElementById("display");
let content="";
let res="";

function display(val){
    content+=val;
    dis.textContent=content;   
}

function clr(){
    content="";
    dis.textContent='';
}

function result(){
    res=eval(content);
    dis.textContent=res;
    content=res;
}

function del(){
    content=content.slice(0,-1);
    dis.textContent=content;   
}
