let text= '';
for (let i=1; i<=5 ; i++) {
    for(let j = 1; j <= i; j++){
        text += '*';
    }
    text += '\n';
}
console.log(text);