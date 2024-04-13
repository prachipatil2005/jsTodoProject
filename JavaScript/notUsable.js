// const obj = { a: 1, b: 2, c: 3 };

// for (const key in obj) {
//     if (key === 'a') {
//         console.log(obj[key]);
//         //break; // Optional: If you want to exit the loop after finding the desired key
//     }
// }
// function my(x,y)
// {
//     z=x+y;
//     console.log("before return");
//     return z;
//     console.log("no");
// }
// let num=my(5,7);
// console.log(num)


// function myFunction(a,b)
// {
//     return a+b;
// }
// let myvar=myFunction(6,9);
// console.log(myvar);
// const Myarrow=(a,b)=>{
//     //console.log(a+b);
//     return a+b;


// }
// let varr=Myarrow(6,7);
// console.log(varr)

// printing vowels
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
//         {
//             count++
//         }


//     }
//     console.log(count);


// }
// let count1=countVowels("praaaaaaachi");
// console.log(count1);
// let b="AAAAAfjfyvyty".toUpperCase();
// console.log(b)
// function myFunction(){
//     console.log("hellow");
// }
// function my(myFunction){
//     return myFunction;
// }
// myFunction();
// let arr=[1,2,1,2,1,3]
// arr.forEach(function printval(val){
//     console.log(val);
// });
let arr=["pune","pen","munbai","kashi"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
