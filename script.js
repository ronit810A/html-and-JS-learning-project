console.log("Hello")

let num= 60;

const profile={
    name:"ronit",
    isfollow:"true",
    post:23,
    follower:49,
};

console.log(profile);


console.log("number is=", num);

if(num % 5 === 0){
    console.log("number is multiple of 5");
}
else{
    console.log("number is note multiple of 5");
}

if( num >= 80){
    console.log("A Grade");
}
else if( num >= 70){
    console.log("B Grade");
}
else if( num >= 60){
    console.log("C Grade");
}
else if( num >= 50){
    console.log("D Grade");
}
else{
    console.log("F Grade");
}


for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

let gamenum = 25;
let numa= 0;


while( numa != gamenum){
    numa=25;
}

console.log("congratulation you win");


let marks =[85,97,44,37,76,60];

sum=0;

for(let i of marks){
    sum+=i;
}

let avg=sum/marks.length;

console.log(`average marks is=${avg}`);


const countvowel=(str)=>{
    let count=0;
    for( const char of str){
        if(
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
         ) {
            count++;
        }
    }
    console.log(count);
}


let marksa=[89,90,95,87,98];

let r= marksa.filter((val)=>{
    return val>=90;
})


console.log(r);

let n = 10;

let arr=[];

for( let i=1; i<=n; i++){
    arr[i-1]= i;
}
let newarr = arr.reduce((result,crunt)=>{
    return result+crunt;
})
let output = arr.reduce((result,crunt)=>{
    return result*crunt;
})
console.log(newarr);
console.log(output);


 let btn = document.querySelector("#btn");

 let mode = "light";

 let body = document.querySelector("body");

 btn.addEventListener("click",()=>{
    if(mode === "light"){
        mode = "dark";
        body.style.backgroundColor = "#000000";
    }
    else{
        mode="light";
        body.style.backgroundColor = "#fff";
    }
    console.log(mode);
 });


class toyotacar{
    cunstructor(brand,model,color){
        console.log("car is created");
        this.brand=brand;
        this.model=model;
        this.color=color;
    }
    start(){
        console.log("car is start");
    }
    stop(){
        console.log("car is stop");
    }
    setcolor(color){
        this.color=color;
    }
}

let fortuner = new toyotacar();
fortuner.setcolor("red");
let honda = new toyotacar();
honda.setcolor("blue");



class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewprofile(){
        console.log(`name=${this.name} email=${this.email}`);
    }
}
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editprofile(){
        data = "profile is edited";
    }
}

let student1 = new user("ronit","ronit@example.com");
let student2 = new user("rahul","rahul@example.com");
let teacher1 = new user("sachin","sachin@example.com");

student1.viewprofile();
student2.viewprofile();
teacher1.viewprofile();


