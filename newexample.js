var num1=20;
var num2=5;
if(num1<num2){
    num2=num2*num1;
}
else{
    num1=num1/num2;
}
if(num1<num2){
    num1=num1*2;
}
else if(num1==num2){
    num2=num1*num2
}
else{
    num2=num2*2;
}
console.log(num1)
console.log(num2)