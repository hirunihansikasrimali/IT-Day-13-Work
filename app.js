// localStorage.setItem("name", "Hiruni");

// localStorage.setItem("name", "Hiru");

// let cname=localStorage.getItem("name");
// console.log(cname);

//localStorage.clear();


const customerList=[
   {
    name:"hiruni",
    age:19,
    live:"monaragala"
   },
   {
    name:"hiru",
    age:19,
    live:"monaragala"
   },
   {
    name:"hiruni",
    age:19,
    live:"monaragala"
   },
   {
    name:"hiruni",
    age:19,
    live:"monaragala"
   }
]

let arCustomers = JSON.stringify(customerList);
localStorage.setItem("customerList", arCustomers);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));
