let table_datas=document.querySelector(".table_datas");

let table_records='';

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

let thead=Object.keys(table_data[0]);
console.log(thead);


table_datas.innerHTML=table_records;