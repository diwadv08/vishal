let a=0;
const Move=()=>{
    a+=1;
    console.log('Hello-'+a)
}
let div=document.querySelector("div");
function ScrollFun(){
    if(pageYOffset>=100){
        div.style.background='blue';
    }
    else{
        div.style.background='transparent';
    }
    
}

