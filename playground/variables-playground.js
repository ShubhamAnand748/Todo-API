var abc = {
    a: 10,
    b: 20
};
console.log('Values of abc object a and b :');
console.log(abc);
function display(obj) {
    //obj.a = 15;
    debugger;
}
display(abc);
console.log('Current values of abc object a and b :');
console.log(abc);

var xyz = [10, 20];
console.log('Values of array xyz');
console.log(xyz);
function disp(abcArr) {
    abcArr.push(30);
    debugger;
}
disp(xyz);
console.log('Current values of array xyz :');
console.log(xyz);