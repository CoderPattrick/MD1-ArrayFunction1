var str = 'cd17fD#f1feqfQDWQDWQ@e21';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (let i = 0; i < str.length; i++) {
    if(UPPER.indexOf(str[i])!==-1){
        // result+=str[i].toLowerCase();
        result.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i])!==-1) {
        // result += str[i].toUpperCase();
        result.push(str[i].toUpperCase());
    }
    else {
        // result += str[i];
        result.push(str[i]);
    }
}
// document.write(str + "<br>" + result);
document.write(str + "<br>" + result.join(""));