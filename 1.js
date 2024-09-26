//Name="tony";
//console.log(Name);
//age=24;
//console.log(age);
//alert("hlo");
//prompt("hi");

//  const profile={
//     username:"nutanydv",
//     posts:195,
//     followers:2,
//     following:73,
//     isFollow:true,
// };
// console.log(profile);

// let age=prompt("enter your age" );

// if(age>=18){
//     console.log("you are an adult"); 
// }else{
//     console.log("you are minor");
//}
// let name="neha";
// let answer= name=="nutan"?"you are beautiful":"you are ugly";
// console.log(answer);
// let nmbr=prompt("a nmbr please");
// if(nmbr%5==0){
//     console.log(nmbr,"is multiple of 5");
// }else{
//     console.log(nmbr,"not a multiple of 5");
// }
// let score=prompt("enter your score please");
// if(score>=80&&score<=100){
//     console.log("your grade is A");
// }else if(score>=70&&score<=89){
//     console.log("your grade is B");
// }else if(score>=60&&score<=69){
//     console.log("your grade is C"); 
// }else if(score>=50&&score<=59){
//     console.log("your grade is D");
//  }else if(score>=0&&score<=49){
//   console.log("your grade is F");}
// let item=prompt("what do you want");
// switch(item){
//     case "orange":
//     console.log("price is 58");
//     break;
//     case "apple":
//         console.log("price is 98");
//         break;
//         case "tree":
//             console.log("price is 54");
//             break;
//             default:
//                 console.log("sorry items are finished");
// }
// let sum=1;
// for(let i=1;i<=5;i++){

// sum=sum+i;
// }
// console.log("sum",sum);
   
// for(i=0;i<=5;i++){
//     console.log("i=",i)
// }
// let i=0;
// while(i<=5){
//     console.log("i",i);
//     i++;
// }
// let i=0;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

// let str="nutanyadav";
// let size=0;
// for( let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=", size);

// let student={
//     name:"nutan",
//     class:"btech",
//     age:78,
//     isPass:"yes"
// };
// for ( let key in student){
//     console.log("key=",key,"value=",student[key]);
// }
//  for(i=0;i<=100;i++){
// if(i%2==0){
//    console.log("i=",i);
// }
//  }
// let gameNmbr=30;
// let userNmbr=prompt("enter a nmbr please");
// while(userNmbr !=gameNmbr){
// userNmbr=prompt("you entered wrng nmbr");
// }
// console.log("congrts");

// let obj={
//     item:"pencil",
//     price:88,
// };
// // console.log("the price of",obj.item,"is",obj.price);
// let output=`the price of ${obj.item} is ${obj.price}`;
// console.log(output);
// console.log(typeof output);
// console.log("apna\ncollege");
// console.log("apna\tcollege");
// let str1=("hellonutan");
// let str2=("baby");

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(0));
// console.log(str2+str1);
// console.log(str1);
// console.log(str2.replace("baby","jaanu"));
// 

// let name=prompt("enter your full name please");
// // console.log(`@${name}${name.length}`);
// console.log("@"+name+name.length);
//  let Array=["h","i","j","k","l","m"]
// // for(let i=0;i<Array.length;i++){
// // console.log(Array[i]);
// // }
// for(let  val of Array){
//     console.log(val);
// }
//  let sum=0;
//  let marks=[ 85,97,44,37,76,60]
//  for(let val of marks){
//    sum+=val;
// }
//    let avg=sum/marks.length; 
// console.log(`the average marks is ${avg}`);

//alert("Page Loaded");

// const app1= ()=> {
//     console.log("this is")
//     return"abc"
// }
// let value=app1()
// console.log(value);

// let product=document.getElementById('product')
// console.log(product)
// product.addEventListener('click',()=>{

// }))
// const fruits=["apple","mango","guava"]
// const[fruit1,...fruit2]=fruits
// console.log(fruit1)

// const sum=(...args)=>{
//     result=0;
//     for(let arg of args)
//     {
//         result+=args;
//     }
//     return result;
// }
// console.log(1);
// console.log(12);
// console.log(3);
// console.log(4);
//console.log(15);
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
// console.log("button was clicked handler1");
// });

// btn1.addEventListener("click", () => {
// console.log("button was clicked handler2");
// });
// const handler3=() => {
//     console.log("button was clicked handler3");
//     };
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
// console.log("button was clicked handler4");
// }); 

// btn1.removeEventListener("click",handler3);
// let div = document.querySelector("#id1");
// div.onmouseover = (e) => {
//     console.log("you are in div");
// };
// let modeBtn= document.querySelector("#mode");
// let crntMode="light";
// modeBtn.addEventListener("click", () => {
//     if(crntMode === "light"){
//         crntMode="dark";
//         document.querySelector("body").style.backgroundColor="black";

//     }else{
//         crntMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
// console.log(crntMode);
// });

// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
//  let newarr=companies.push("amazon");
//  console.log(newarr);
//  console.log(companies);
//  let arr="abc".toUpperCase();
//  console.log(arr);
// let urr=[1,2,3].push(4);
// console.log(urr);
// function sum(x,y,h){
//     console.log(x+y+h);
// }
// sum(1,3,8);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// sum(3,4);

// const mul= (a,b) => {
//     console.log(a*b);
// }
// console.log(mul);
// mul(3,6);

// function stng(str){
//     let count=0;
//     for( const char of str){
//         if(char ==="a"|| char ==="e" || char ==="i" ||char ==="o" ||char ==="u" )
//     {
// count++;
//     }
// }console.log(count);
// }

const arrFun=(str) =>{
    let count=0;
    for( const char of str){
        if(char ==="a"|| char ==="e" || char ==="i" ||char ==="o" ||char ==="u" )
    {
count++;
    }
}console.log(count);
}