console.log("Hello")

const profile={
    name:"ronit",
    isfollow:"true",
    post:23,
    follower:49,
};

console.log(profile);

let num= prompt("enter number");

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