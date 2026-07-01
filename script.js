console.log("Hello")

let num= prompt("enter your num");

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



while(num != gamenum){
    num= prompt("enter new num");
}

console.log("congratulation you win");


let marks =[85,97,44,37,76,60];

sum=0;

for(let i of marks){
    sum+=i;
}

let avg=sum/marks.length;

console.log(`average marks is=${avg}`);
