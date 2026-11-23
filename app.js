// localStorage.setItem("name", "Hiruni");

// localStorage.setItem("name", "Hiru");

// let cname=localStorage.getItem("name");
// console.log(cname);

//localStorage.clear();


// const customerList=[
//    {
//     name:"hiruni",
//     age:19,
//     live:"monaragala"
//    },
//    {
//     name:"hiru",
//     age:19,
//     live:"monaragala"
//    },
//    {
//     name:"hiruni",
//     age:19,
//     live:"monaragala"
//    },
//    {
//     name:"hiruni",
//     age:19,
//     live:"monaragala"
//    }
// ]

// let arCustomers = JSON.stringify(customerList);
// localStorage.setItem("customerList", arCustomers);
// let listCustomer = localStorage.getItem("customerList");
// console.log(JSON.parse(listCustomer));

// localStorage.clear();

// function addCustomer(){
//     let customerId = document.getElementById("customerId").value;
//     let customerName = document.getElementById("customerName").value;
//     let customerAge = document.getElementById("customerAge").value;
//     let customerAddress = document.getElementById("customerAddress").value;

//     const customer={
//         custId: customerId,
//         custName: customerName,
//         custAge: customerAge,
//         custAddress: customerAddress
//     }
//     saveCustomerLocalDb(customer);
// }

// function saveCustomerLocalDb(customer){
//     if(localStorage.getItem('customerList')){
//         console.log(true);
//         let arOfCustomers = JSON.parse(localStorage.getItem("customerList"));
//         arOfCustomers.push(customer);

//         localStorage.setItem("customerList", JSON.stringify(arOfCustomers));
//     }else{
//         console.log(false);
//         const customerList = []
//         customerList.push(customer);
//         let arCustomers=JSON.stringify(customerList);
//         localStorage.setItem("customerList", arCustomers);
//     }

//     let arOfCustomers = JSON.parse(localStorage.getItem("customerList"));
//     console.log(arOfCustomers);

// }


//////////////////////////////////////////////////////////////////////////////////////////////////


// function viewCustomer(){
//     let arOfCustomers = JSON.parse(loc)
// }


// import  customer from "./model/Customer.js";
// import Iteam from "./model/Iteam.js";

// let customer = new Customer("001", "saman", "20", "kalutara");
// console.log(customer);
// let iteam = new Iteam();
// console.log(iteam);

// //////////////////////////////////////////

// import {customerList, getSum} from "./Example.js";
// let sum = getSum(10,20);
// console.log(sum);


// import Customer from "./model/Customer.js";
// import Item from "./model/Item.js";

// let customer1 = new Customer("001", "saman", "20", "kalutara");
// console.log(customer1);

let item1 = new Item();
console.log(item1);

import { customerList, getSum } from "./Example.js";

let sum = getSum(10, 20);
console.log(sum);

console.log(customerList);



/////////////////
// viva-- synchronies, modules, bootstrap , 