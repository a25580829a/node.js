let data3 = [
    { memNo : 1001 , name : "Jeff" , money : 1000},
    { memNo : 1002 , name : "Leo" , money : 2000},
    { memNo : 1003 , name : "Keven" , money : 950},
    { memNo : 1004 , name : "Holy" , money : 470},
    { memNo : 1005 , name : "Jenny" , money : 890}
];


console.log(data3);//(1)


let result2 = data3.map (element => element["name"]);
console.log("-".repeat(60));
console.log("name : ", result2);//(2)

let result3 = data3.map (element => element["memNo"]);
console.log("-".repeat(60));
console.log("memNo : ", result3);//(3)

let result4 = data3.filter (element => element["money"] >= 900);
console.log("-".repeat(60));
console.log(result4);//(4)


let add2 = (a, b) => {return a + b};
console.log("-".repeat(60));
console.log(add2(2, 3));//(5)

let sayHello2 = (name2, age2) =>{
    console.log("Hi, 我是"+name2+","+"年紀:"+age2);
    return console.log("下課了");
};
console.log("-".repeat(60));
sayHello2("林政翰", 21);//(6)

