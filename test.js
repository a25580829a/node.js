/*let data = {
    "Name" : "Mary",
    "Height" : 160 ,
    "Weight" : 60 ,
    "Age" : 20 ,
    "Class" : "A" ,
    "interest" : ["喝酒","爬山","寫程式"]
};

//console.log("嗨嗨,我是",data.Name,"階級為",data.Class);
//console.log( data.Name , "原本的身高為" , data.Height);
//data["Height"] = 180;
//console.log("的身高為" , data.Height);
data.interest.push("彈吉他");
console.log("interest:",data.interest);
console.log(data);

*/

let arr5 = [15, 16, 17, 18, 19, 20];
console.log(arr5);
console.log("-".repeat(50));
result1 = arr5.map(i => i * 10);
console.log(result1);
console.log("-".repeat(50));
result2 = arr5.filter(m => m % 2 == 1);
console.log(result2);
