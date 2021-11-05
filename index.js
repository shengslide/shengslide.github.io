// setTimeout(sayhello,3000); //Thread
// function sayhello(){
// alert("sheng still strong");
// }
// var myname= window.prompt("What's your name?");
// console.log(myname);
//------------------------------------------add HTML element
// document.getElementById("submit_button").onclick=function(){
//     var myName= document.getElementById("fname").value;
//     console.log(myName);
// };
// const h1= document.createElement("h1");
// h1.innerHTML="<u>hello World</u>";
// document.body.append(h1);
//------------------------------------------------------
// function sum(...items){
//     let total=0;
//     for(let i in items){
//         total+=items[i];
//     }
//     return total;
// }
// console.log(sum(10,20,30))
// //-----------------------------
// function displayName(first,last,...middle){
//     console.log(first,middle,last)
// }
// displayName("sheng","Ha","Tien","Thanh","Bao","Tai")
//-----------------------------flatten the array
// number=[1,2,3];
// console.log(...number);
//------------------------------------loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }
//----------
// let letters=["H","E","L","P"];
// for(let i in letters){
//     console.log(letters[i]);
// }
//----------
// let cart=[5,6,7,8,9];
// let total=0;

// function checkOut(element){
//     total+=element;
// }
// cart.forEach(checkOut);
// console.log(total);
// ---------------------------------------random------------------
// var randNum;
// randNum=Math.random(); //0-1
// randNum=Math.floor(Math.random()*6);//0-5
// randNum=Math.floor(Math.random()*6)+1;//1-6
// function getRandomNum(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
//------------------------------------------string method-------------------
// var myName="sheng  ngu";
// var power="ao tuong suc manh"
// console.log(myName[0]);
// console.log(myName.indexOf(" "));
// console.log(myName.lastIndexOf("n"));
// console.log(myName.trim()); // delete the space in head and last
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.slice(0,3));
// console.log(myName.slice(myName.lastIndexOf(" ")+1));
// console.log(myName.concat(" ",power)); //combine 2 sentence to 1 
// console.log(myName.replaceAll("n","t"));
//------------------------------------------------function 
// array_functions.forEach(func=>func())
//------------------------
// let storeUSD=[5,6,7,8,9];
// function toEuros(value){
//     value*=0.5;
//     return value
// }
// console.log(storeUSD.map(toEuros))
//-----------
// let x="Yo";
// let y="Sheng";
// let hello=(x,y) => x+" " +y+" world";
// console.log(hello(x,y));
// let hello=(x,y) => {console.log(x);console.log(y)};
//----------Lọc 
// function check(point){
//     if (point >7){
//         return point;
//     }
// }
// console.log(storeUSD.filter(check));
//----------Combine
// let letters=["H","E","L","P"];
// function combineLetters(total,nextLetter){
//     return total+nextLetter;
// }
// console.log(letters.reduce(combineLetters));
//--------------------------------------------------------------class 
// let supervisor={
//     name:"Sheng",
//     eat:function(){
//         console.log(this.name," is eating vetegable")}
// }
// let boss={
//     name:"Bao",
//     Drink:function(){
//         console.log(this.name,"drink beer")
//     },
//     takeAttendence: function(...students){
//         console.log(this.name,"is taking attendence")
//         for (let i in students)
//         {console.log(students[i])}
//     }
// }
// student=["sheng","ha","tien"]
// supervisor.eat()
// boss.Drink.call(supervisor)
// let teacher ={name:"Mrs.puff"}
// boss.takeAttendence.call(teacher,...student)
//--------------------
// var human={
//     name:"sheng",
//     age:18,
//     energy: function(){
//         console.log("Sheng is running hehehe")
//     }
// }
//--------------
// class Animal{ 
//     constructor(){this.alive=true}
//     eat(){
//         console.log("This animal is eating")
//     }
// }
// class Car extends Animal{
//     constructor(make,color){
//     super()
//     this.make=make;
//     this.color=color;
// }
//     drive(){console.log("You drive the car~")};
// }
// let car = new Car("China","red");
// console.log(car.alive);
//---------------------------try catch
// try{
//     let age=prompt("Enter your age: ")
//     if (age=="") throw "You didn't enter in anything!";
//     if(isNaN(age)) throw age+"isn't a number";
//     console.log("You are signed up!");
// }
// catch(error){
// console.log(error);
// // console.log(error.name)
// //console.log(error.message)
// }
// finally{console.log("thanks for visiting")}