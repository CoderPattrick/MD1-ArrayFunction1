let longafnum = window.prompt();
let string = longafnum.toString();
let display = string[0];
for (let i = 1; i < longafnum.length ; i++) {
    if(string[i]%2==0&&string[i-1]%2==0){
        display += "-"+string[i];
    }
    else display += string[i];
}
document.write(display);

