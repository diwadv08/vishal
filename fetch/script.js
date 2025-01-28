// let url=fetch('https://jsonplaceholder.typicode.com/photos');
// url.then((rr)=>{
//     return rr.json();
// }).then((ss)=>{
//     console.log(ss);
// }).catch((e)=>{
//     console.log('Error!');
// }).finally((e)=>{
//     console.log('Hello');
// })

let api_row=document.querySelector(".api_row");
// api_row.innerHTML='Hello'

// then catch
// async await
let col_6='';
async function MyName(){
    let url=await fetch('https://jsonplaceholder.typicode.com/photos');
    let data=await url.json();
    data.map((e)=>{
        col_6+=`<div class="col-lg-4 col-md-6 my-3">
                    <div class="card text-center">
                        <h3>${e.id}</h3>
                        <p>${e.title}</p>
                    </div>
                </div>`;
    })
    api_row.innerHTML=col_6
}
MyName()