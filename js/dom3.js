// Password check
function PasswordChecker(e){
    let myInput=e.value;
    let ptag_array=document.querySelectorAll("p");
    let submit=document.querySelector("#submit");
    let myInput_array=myInput.split('');
    let spl_characters=['@','$','!','/','_','*'];
    let spl_characters_count=0;
    if(myInput.length>0){
        // Length Validate
        if(myInput.length>=7){
            ptag_array[1].style.color='green';
        }
        else{
            ptag_array[1].style.color='red';
        }

        // Capital First Letter
        let first_letter=myInput[0];
        if(first_letter==first_letter.toUpperCase()){
            ptag_array[0].style.color='green';
        }
        else{
            ptag_array[0].style.color='red';
        }

        // Number condition
        let result=myInput_array.filter((e)=>{
            return isFinite(e);
        })
        if(result.length>0){
            ptag_array[3].style.color='green';
        }
        else{
            ptag_array[3].style.color='red';
        }
        

        // Special Character validate
        spl_characters.map((e)=>{
            if(myInput.includes(e)){
                spl_characters_count+=1;
            }
        })

        if(spl_characters_count>0){
            ptag_array[2].style.color='green';
        }
        else{
            ptag_array[2].style.color='red';
        }


        // Display submit btn
        if(ptag_array[0].style.color=='green' && ptag_array[1].style.color=='green' && ptag_array[2].style.color=='green' && ptag_array[3].style.color=='green'){
            submit.style.display='inline';
        }
        else{
            submit.style.display='none';
        }
    }
    
    
   
}

// Array Methods
// var a="Hello World Welcome to Earth";
// var b=a.split(" ");

// for(let i=0;i<b.length;i++){
//     console.log(b[i]);
// }

// for(let i in b){
//     console.log(i);
// }
// for(let i of b){
//     console.log(i);
// }
// Function Types:-
// function Name(){

// }

// const Name=function (){

// }

// const Name=()=>{

// }


// var a=[10,20,30,40];
// // var b=a.map((e)=>{
// //    return e*10;    
// // })
// var b=a.filter((e)=>{
//     return e>20;
// })
// var c=a.find((e)=>{
//     return e>20;
// })



// console.log(a);
// console.log("Filter",b);
// console.log("Find",c);
