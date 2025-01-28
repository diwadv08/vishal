let table_datas=document.querySelector(".table_datas");


const table_data=[
    {
        id:'1',
        name:'Harish',
        mobile:'987654387',
        email:'harish@gmail.com'
    },
    {
        id:'2',
        name:'Suresh',
        mobile:'567567654387',
        email:'Suresh@gmail.com'
    },
    {
        id:'3',
        name:'Ravi',
        mobile:'4565656567',
        email:'Ravi@gmail.com'
    },
    {
        id:'4',
        name:'Varun',
        mobile:'98756767',
        email:'Varun@gmail.com'
    },
];
let table_records=`<table width='100%'><tr align='left'>`;
let thead=Object.keys(table_data[0]);
thead.map((e)=>{
    table_records+=`<th>${e.toUpperCase()}</th>`;
})
table_records+=`</tr>`
table_data.map((e)=>{
    table_records+=`<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.mobile}</td>
            <td>${e.email}</td>
        </tr>`
})


table_datas.innerHTML=table_records;

