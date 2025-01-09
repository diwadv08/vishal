// function Mode(e){
//     if(e.innerHTML=='Light'){
//         e.innerHTML='Dark';
//         document.body.style.background='white';
//     }
//     else if(e.innerHTML=='Dark'){
//         e.innerHTML='Light';
//         document.body.style.background='black';
//     }
// }


// function Change(e){
//     var pwd=document.querySelector("#pwd")
//     if(e.className=='fa fa-eye-slash'){
//         pwd.type='password';
//         e.className='fa fa-eye';
//     }
//     else if(e.className=='fa fa-eye'){
//         pwd.type='text';
//         e.className='fa fa-eye-slash';
//     }
// }

function SubmitFn(){
    let name=document.querySelector("#name").value;
    let pwd=document.querySelector("#pwd").value;
    let error=document.querySelector("p")
    if(name!="admin" || pwd!='123'){
        error.innerHTML='Invalid Login';
        error.style.color='red';
        return false;
    }
}
